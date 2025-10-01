import { useState } from 'react';
import { Camera, Upload, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CropGradingPageProps {
  onNavigate: (page: string) => void;
}

export default function CropGradingPage({ onNavigate }: CropGradingPageProps) {
  const [gradeResult, setGradeResult] = useState<{
    grade: string;
    price: string;
    quality: string;
  } | null>(null);

  const handleImageUpload = () => {
    // Simulate AI grading
    setTimeout(() => {
      setGradeResult({
        grade: 'Grade A',
        price: '₹2200/quintal',
        quality: 'Excellent quality, minimal defects',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="grading" onNavigate={onNavigate} />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            AI Crop Grading
          </h1>
          <p className="text-lg text-gray-600">
            Upload a photo of your crop to get instant quality grading and fair price estimation
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6 border border-gray-200">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-green-600 transition-colors">
            <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Crop Photo
            </h3>
            <p className="text-gray-600 mb-6">
              Take a clear photo of your crop for accurate grading
            </p>
            <button
              onClick={handleImageUpload}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center space-x-2"
            >
              <Upload size={20} />
              <span>Upload Photo</span>
            </button>
          </div>
        </div>

        {/* Results Section */}
        {gradeResult ? (
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Grading Results
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base font-medium text-gray-700">Grade:</span>
                  <span className="text-2xl font-bold text-green-700">{gradeResult.grade}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base font-medium text-gray-700">Fair Price:</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {gradeResult.price}
                  </span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{gradeResult.quality}</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => onNavigate('planning')}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                Plan Next Crop →
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <div className="text-gray-400 mb-4">
              <div className="w-24 h-24 border-2 border-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-gray-300" />
              </div>
            </div>
            <p className="text-gray-600 text-base">
              Your crop grade will appear here
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
