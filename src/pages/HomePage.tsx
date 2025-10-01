import { Camera, TrendingUp, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: <Camera className="w-12 h-12 text-green-600" />,
      title: 'AI Crop Grading',
      description: 'Intelligent crop quality assessment and fair price estimation',
      page: 'grading',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: 'Smart Crop Planning',
      description: 'Data-driven recommendations for optimal crop selection',
      page: 'planning',
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-orange-600" />,
      title: 'Pest & Disease Alerts',
      description: 'Early detection and treatment recommendations',
      page: 'pest',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="home" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-green-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Farmers with AI for Better Income & Safer Crops
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Advanced agricultural intelligence for data-driven farming decisions
          </p>
          <button
            onClick={() => onNavigate('grading')}
            className="bg-green-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all shadow-xl"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => onNavigate(feature.page)}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all text-left group border border-gray-200"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                <span>Learn more</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Scan Crop</h3>
              <p className="text-sm text-gray-600">Upload crop images</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-white">₹</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Price</h3>
              <p className="text-sm text-gray-600">Receive fair estimates</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Plan Crop</h3>
              <p className="text-sm text-gray-600">Optimize selection</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Protect Crop</h3>
              <p className="text-sm text-gray-600">Monitor health</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
