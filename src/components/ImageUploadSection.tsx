
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Image, Sparkles } from "lucide-react";

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
          description: "Your style has been generated successfully",
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
        description: "Failed to generate the style. Please try again.",
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
    <section className="py-24 bg-blue-950/90 backdrop-blur-lg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-purple-500/0"></div>
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-600/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-900/50 rounded-full text-indigo-300 text-sm font-medium mb-4">AI-Powered</span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-200 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-400" />
            <span>Style Generator</span>
            <Sparkles className="h-6 w-6 text-purple-400" />
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Upload an image and let our AI generate a personalized fashion style guide based on your preferences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 border-indigo-800/30 text-indigo-50 shadow-xl shadow-blue-900/20">
            <CardHeader className="text-center border-b border-indigo-800/30 pb-6">
              <CardTitle className="text-2xl text-indigo-200">Transform Your Style</CardTitle>
              <CardDescription className="text-indigo-300">
                Upload a reference image to generate your personalized style recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-full h-64 bg-indigo-900/50 border-2 border-dashed border-indigo-700/50 rounded-lg flex flex-col items-center justify-center mb-6 overflow-hidden group transition-all duration-300 hover:border-indigo-600/70">
                    {previewUrl ? (
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="h-full w-full object-contain rounded-lg" 
                      />
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-indigo-300 text-center px-4">
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
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-none text-white font-medium py-6"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </span>
                    ) : "Generate Style Guide"}
                  </Button>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-64 bg-indigo-900/50 border border-indigo-700/50 rounded-lg flex items-center justify-center mb-6 overflow-hidden relative">
                    {generatedImage ? (
                      <img 
                        src={generatedImage} 
                        alt="Generated Style" 
                        className="h-full w-full object-contain rounded-lg" 
                      />
                    ) : (
                      <div className="text-center p-4 flex flex-col items-center">
                        <Image className="h-12 w-12 text-indigo-400 mb-3" />
                        <p className="text-indigo-300">
                          Your generated style guide will appear here
                        </p>
                      </div>
                    )}
                    {generatedImage && (
                      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <p className="text-white text-sm font-medium">Your Personalized Style</p>
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
                        
                        toast({
                          title: "Download started",
                          description: "Your style guide is being downloaded",
                        });
                      }
                    }} 
                    disabled={!generatedImage} 
                    variant="outline" 
                    className="w-full border-indigo-500/50 text-indigo-300 hover:bg-indigo-800/50 py-6"
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
