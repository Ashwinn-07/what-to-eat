export default function Privacy() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Last updated: December 2024
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            What To Eat? is designed with privacy in mind. We do not collect,
            store, or transmit any personal information to external servers. All
            data is stored locally on your device using browser local storage.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Local Storage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The app uses your browser's local storage to save your favorite
            dishes. This data remains on your device and is never transmitted to
            our servers or any third parties. You can clear this data at any
            time through your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not use cookies for tracking purposes. Any cookies used are
            strictly for essential functionality of the website.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This website may display advertisements through third-party
            advertising networks. These networks may use cookies and similar
            technologies to serve relevant ads. Please refer to their respective
            privacy policies for more information.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Since all data is stored locally on your device, the security of
            your favorites list depends on your device's security measures. We
            recommend keeping your device secure with appropriate passwords and
            security updates.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </div>
      </div>
    </div>
  );
}
