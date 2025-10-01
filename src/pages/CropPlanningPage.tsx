import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CropPlanningPageProps {
  onNavigate: (page: string) => void;
}

export default function CropPlanningPage({ onNavigate }: CropPlanningPageProps) {
  const [formData, setFormData] = useState({
    landSize: '',
    soilType: '',
    waterAvailability: '',
    budget: '',
  });

  const [recommendations, setRecommendations] = useState<
    Array<{
      name: string;
      profit: string;
      duration: string;
      requirements: string;
    }>
  >([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI recommendations
    setRecommendations([
      {
        name: 'Wheat',
        profit: '₹45,000 - ₹55,000 per acre',
        duration: '120-150 days',
        requirements: 'Moderate water, loamy soil',
      },
      {
        name: 'Maize',
        profit: '₹40,000 - ₹50,000 per acre',
        duration: '90-110 days',
        requirements: 'Good water, well-drained soil',
      },
      {
        name: 'Potato',
        profit: '₹60,000 - ₹75,000 per acre',
        duration: '90-120 days',
        requirements: 'Moderate water, sandy loam',
      },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="planning" onNavigate={onNavigate} />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Smart Crop Planning
          </h1>
          <p className="text-lg text-gray-600">
            Get AI-powered recommendations for maximum profit
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Land Size (in acres)
              </label>
              <input
                type="number"
                value={formData.landSize}
                onChange={(e) =>
                  setFormData({ ...formData, landSize: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-base"
                placeholder="e.g., 5"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Soil Type
              </label>
              <select
                value={formData.soilType}
                onChange={(e) =>
                  setFormData({ ...formData, soilType: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-base"
                required
              >
                <option value="">Select soil type</option>
                <option value="clay">Clay</option>
                <option value="loamy">Loamy</option>
                <option value="sandy">Sandy</option>
                <option value="black">Black Soil</option>
                <option value="red">Red Soil</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Water Availability
              </label>
              <select
                value={formData.waterAvailability}
                onChange={(e) =>
                  setFormData({ ...formData, waterAvailability: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-base"
                required
              >
                <option value="">Select water availability</option>
                <option value="high">High (Irrigation available)</option>
                <option value="moderate">Moderate (Rainfall dependent)</option>
                <option value="low">Low (Limited water)</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Budget (in ₹)
              </label>
              <input
                type="number"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-green-600 focus:outline-none text-base"
                placeholder="e.g., 50000"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all flex items-center justify-center space-x-2"
            >
              <TrendingUp size={24} />
              <span>Get Best Crop Plan</span>
            </button>
          </form>
        </div>

        {/* Recommendations Section */}
        {recommendations.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recommended Crops for You
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recommendations.map((crop, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {crop.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1 uppercase font-medium">
                        Expected Profit
                      </p>
                      <p className="text-base font-bold text-green-700">
                        {crop.profit}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1 uppercase font-medium">Duration</p>
                      <p className="text-base font-semibold text-gray-800">
                        {crop.duration}
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1 uppercase font-medium">Requirements</p>
                      <p className="text-sm text-gray-700">
                        {crop.requirements}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => onNavigate('pest')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                Check Pest Alerts →
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
