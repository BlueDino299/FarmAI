import { useState } from 'react';
import { Upload, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PestAlertPageProps {
  onNavigate: (page: string) => void;
}

export default function PestAlertPage({ onNavigate }: PestAlertPageProps) {
  const [detectionResult, setDetectionResult] = useState<{
    disease: string;
    severity: string;
    suggestion: string;
    description: string;
  } | null>(null);

  const handleImageUpload = () => {
    // Simulate AI detection
    setTimeout(() => {
      setDetectionResult({
        disease: 'Early Blight',
        severity: 'Medium',
        suggestion: 'Neem Oil Spray (3ml/L)',
        description:
          'Apply neem oil spray every 7 days. Remove affected leaves. Ensure proper spacing for air circulation.',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="pest" onNavigate={onNavigate} />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Pest & Disease Alerts
          </h1>
          <p className="text-lg text-gray-600">
            AI-powered detection to protect your crops
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-6 border border-gray-200">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-orange-500 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Upload Plant/Leaf Photo
            </h3>
            <p className="text-gray-600 mb-6">
              Take a clear photo of affected plant parts for AI analysis
            </p>
            <button
              onClick={handleImageUpload}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all inline-flex items-center space-x-2"
            >
              <Upload size={20} />
              <span>Upload Photo</span>
            </button>
          </div>
        </div>

        {/* Detection Results */}
        {detectionResult ? (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Detection Results</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-base font-medium text-gray-700">Detected:</span>
                    <span className="text-xl font-bold text-red-700">
                      {detectionResult.disease}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-base font-medium text-gray-700">Severity:</span>
                    <span
                      className={`text-base font-bold px-4 py-2 rounded-lg ${
                        detectionResult.severity === 'High'
                          ? 'bg-red-600 text-white'
                          : detectionResult.severity === 'Medium'
                          ? 'bg-orange-500 text-white'
                          : 'bg-green-600 text-white'
                      }`}
                    >
                      {detectionResult.severity}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6">
                  <p className="text-sm font-medium text-gray-700 mb-2 uppercase">
                    Recommended Treatment:
                  </p>
                  <p className="text-lg font-bold text-gray-900 mb-3">
                    {detectionResult.suggestion}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {detectionResult.description}
                  </p>
                </div>
              </div>
            </div>

            {/* India Map Section */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Regional Outbreak Alerts
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-4">
                  Active Outbreaks in Your Region
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-medium border border-red-200">
                    Punjab - Early Blight
                  </span>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium border border-orange-200">
                    Haryana - Aphids
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium border border-yellow-200">
                    UP - Leaf Curl
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => onNavigate('grading')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                Grade Your Crop →
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-200">
            <div className="text-gray-400 mb-4">
              <div className="w-24 h-24 border-2 border-gray-200 rounded-lg mx-auto flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-gray-300" />
              </div>
            </div>
            <p className="text-gray-600 text-base">
              AI will detect pest/disease after you upload an image
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
