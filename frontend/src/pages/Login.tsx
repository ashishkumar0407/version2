import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import heroBg from "@/assets/hero-bg.png";
import { useState } from "react";
import { login } from "@/services/api";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await login({ email, password });
      toast.success("Login successful!");
      navigate("/"); // Redirect to dashboard or home
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar alwaysOpaque />

        <div className="flex-grow pt-32 pb-16 px-4">
          <RevealOnScroll>
            <div className="max-w-md mx-auto bg-white dark:bg-card rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-border">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Sign in to your account to continue
                </p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <Button
                  className="w-full h-12 text-lg font-medium"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}{" "}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </RevealOnScroll>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Login;
