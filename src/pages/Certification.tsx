import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Award, CheckCircle, XCircle } from "lucide-react";

const Certification = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async () => {
    if (!certificateId.trim()) return;
    
    setIsVerifying(true);
    setVerificationResult(null);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Demo: certificates starting with "BB-" are valid
    if (certificateId.toUpperCase().startsWith("BB-")) {
      setVerificationResult("success");
    } else {
      setVerificationResult("error");
    }
    
    setIsVerifying(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-primary to-blue-600 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Certificate Verification
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Verify the authenticity of certificates issued by Bigbets.Ai.
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16 md:py-24 bg-gray-900 border-t-4 border-t-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Verify Your Certificate
              </h2>
              <p className="text-gray-600">
                Enter the unique ID found on the certificate to verify its authenticity.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter Certificate ID (e.g., BB-WD-12345)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="pl-12 h-12 bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-primary"
                  onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                />
              </div>
              <Button
                onClick={handleVerify}
                disabled={isVerifying || !certificateId.trim()}
                className="bg-blue-200 hover:bg-blue-300 text-primary h-12 px-6 flex items-center gap-2 font-medium"
              >
                <Search className="w-4 h-4" />
                {isVerifying ? "Verifying..." : "Verify"}
              </Button>
            </div>

            {/* Verification Result */}
            {verificationResult === "success" && (
              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800 text-lg">Certificate Verified!</h3>
                    <p className="text-green-600">
                      This certificate is authentic and was issued by Bigbets.Ai.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {verificationResult === "error" && (
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 text-lg">Certificate Not Found</h3>
                    <p className="text-red-600">
                      We couldn't find a certificate with this ID. Please check and try again.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Verify Your Certificate?
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Certificate verification ensures that your credentials are authentic and recognized by employers worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Authenticity</h3>
                <p className="text-gray-600 text-sm">
                  Confirm the certificate is genuine and issued by Bigbets.Ai.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Credibility</h3>
                <p className="text-gray-600 text-sm">
                  Enhance your professional credibility with verified credentials.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Easy Verification</h3>
                <p className="text-gray-600 text-sm">
                  Quick and simple verification process for employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certification;
