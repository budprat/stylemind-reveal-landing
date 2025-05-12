
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image } from "lucide-react";

const WEBHOOK_URL = "https://primary-production-8b5a1.up.railway.app/webhook/generate-image";

const ImageUploadSection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setGeneratedImage(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please select an image to upload",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Convert the image to base64 to send to the webhook
      const base64Image = await convertFileToBase64(selectedImage);
      
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
          fileName: selectedImage.name,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.generatedImage) {
        setGeneratedImage(data.generatedImage);
        toast({
          title: "Success!",
          description: "Your image has been generated successfully",
        });
      } else {
        toast({
          title: "Processing",
          description: "Image was received but no generated image was returned. This might take some time.",
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Error",
        description: "Failed to generate the image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <section className="py-20 bg-blue-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
            Transform Your Style
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Upload an image and let our AI generate a personalized fashion style guide based on your preferences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-900/50 border-blue-800/50 text-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-200">Style Generator</CardTitle>
              <CardDescription className="text-blue-300">
                Upload a reference image to generate your personalized style recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-full h-64 bg-blue-900/50 border-2 border-dashed border-blue-700 rounded-lg flex flex-col items-center justify-center mb-4">
                    {previewUrl ? (
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="h-full w-full object-contain rounded-lg" 
                      />
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-blue-400 mb-2" />
                        <p className="text-blue-300 text-center px-4">
                          Drag & drop your image here or click to browse
                        </p>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    />
                  </div>
                  <Button 
                    onClick={handleUpload} 
                    disabled={!selectedImage || isLoading} 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isLoading ? "Generating..." : "Generate Style Guide"}
                  </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-64 bg-blue-900/50 border border-blue-700 rounded-lg flex items-center justify-center mb-4">
                    {generatedImage ? (
                      <img 
                        src={generatedImage} 
                        alt="Generated Style" 
                        className="h-full w-full object-contain rounded-lg" 
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Image className="h-12 w-12 text-blue-400 mb-2 mx-auto" />
                        <p className="text-blue-300">
                          Your generated style guide will appear here
                        </p>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={() => {
                      if (generatedImage) {
                        const link = document.createElement('a');
                        link.href = generatedImage;
                        link.download = 'style-guide.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }
                    }} 
                    disabled={!generatedImage} 
                    variant="outline" 
                    className="w-full border-blue-500 text-blue-300 hover:bg-blue-800/50"
                  >
                    Download Style Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImageUploadSection;
