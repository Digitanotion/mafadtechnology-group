"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Settings, Check, X, Shield, Info } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      necessary: true, // Ensure necessary is always true
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden animate-slide-up">
            {/* Simple Banner View */}
            {!showPreferences && (
              <div className="p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Icon & Text */}
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-mafad-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-mafad-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-mafad-navy mb-1">
                        🇬🇧 We value your privacy
                      </h3>
                      <p className="text-sm text-gray-600 max-w-2xl">
                        We use cookies to enhance your browsing experience,
                        serve personalised content, and analyse our traffic. By
                        clicking "Accept All", you consent to our use of cookies
                        in accordance with UK GDPR regulations.
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <Link
                          href="/privacy-policy"
                          className="text-xs text-mafad-cyan hover:underline flex items-center gap-1"
                        >
                          <Info className="w-3 h-3" />
                          Privacy Policy
                        </Link>
                        <Link
                          href="/cookie-policy"
                          className="text-xs text-mafad-cyan hover:underline flex items-center gap-1"
                        >
                          <Shield className="w-3 h-3" />
                          Cookie Policy
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-mafad-navy border border-gray-200 rounded-xl hover:border-mafad-cyan transition-all flex items-center justify-center gap-2 order-2 sm:order-1"
                    >
                      <Settings className="w-4 h-4" />
                      Preferences
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-mafad-navy bg-gray-50 hover:bg-gray-100 rounded-xl transition-all order-3 sm:order-2"
                    >
                      Necessary Only
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-8 py-3 bg-mafad-cyan text-mafad-navy font-semibold rounded-xl hover:bg-mafad-cyan/90 transition-all shadow-lg shadow-mafad-cyan/25 flex items-center justify-center gap-2 order-1 sm:order-3"
                    >
                      <Check className="w-4 h-4" />
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences View */}
            {showPreferences && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-mafad-cyan/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 text-mafad-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-mafad-navy">
                        Cookie Preferences
                      </h3>
                      <p className="text-xs text-gray-500">
                        Customise your cookie settings
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-mafad-navy">
                          Necessary Cookies
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Required for the website to function. Cannot be
                          disabled.
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-mafad-cyan/10 text-mafad-cyan text-xs font-semibold rounded-full">
                        Always Active
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-mafad-navy">
                          Analytics Cookies
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Help us understand how visitors interact with our
                          website.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              analytics: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mafad-cyan/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mafad-cyan"></div>
                      </label>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-mafad-navy">
                          Marketing Cookies
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Used to deliver relevant advertisements and social
                          media content.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              marketing: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mafad-cyan/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mafad-cyan"></div>
                      </label>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-mafad-navy">
                          Functional Cookies
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Enable enhanced functionality and personalisation.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) =>
                            setPreferences({
                              ...preferences,
                              functional: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mafad-cyan/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mafad-cyan"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* UK GDPR Notice */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-xs text-amber-800 flex items-start gap-2">
                    <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      In accordance with UK GDPR and the Data Protection Act
                      2018, we process your data based on your consent. You can
                      change your preferences at any time by clicking "Cookie
                      Settings" in the footer.
                    </span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-mafad-navy border border-gray-200 rounded-xl hover:border-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-mafad-navy bg-gray-50 hover:bg-gray-100 rounded-xl transition-all"
                  >
                    Accept Necessary Only
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-8 py-3 bg-mafad-cyan text-mafad-navy font-semibold rounded-xl hover:bg-mafad-cyan/90 transition-all"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
