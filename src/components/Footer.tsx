import React from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Meta Esthetic Thailand
            </h3>
            <p className="text-gray-600 mb-4">
              Premium aesthetic and medical services with cutting-edge
              technology and expert practitioners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={18} className="text-pink-500 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Sukhumvit Road, Bangkok, Thailand 10110
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="text-pink-500 mr-2" />
                <span className="text-gray-600">+66 2 123 4567</span>
              </li>
              <li className="flex items-start">
                <ClockIcon size={18} className="text-pink-500 mr-2 mt-0.5" />
                <div>
                  <span className="block text-gray-600">
                    Mon-Fri: 9:00 AM - 7:00 PM
                  </span>
                  <span className="block text-gray-600">
                    Sat: 9:00 AM - 5:00 PM
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Skin Treatments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Hair Restoration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Facial Aesthetics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Body Contouring
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-500">
                  Nail Treatments
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-100">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Meta Esthetic Thailand. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}