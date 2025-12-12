export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We'd love to hear from you! Whether you have suggestions for new
            dishes, feedback about the app, or just want to say hello, feel free
            to reach out.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Get In Touch
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">
                Feedback & Suggestions
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Have an idea for a new feature or a dish you'd like to see
                added? We're always looking to improve and expand our
                collection.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">Report Issues</h3>
              <p className="text-gray-700 text-sm mt-1">
                Found a bug or experiencing technical difficulties? Let us know
                so we can fix it quickly.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-semibold text-gray-900">General Inquiries</h3>
              <p className="text-gray-700 text-sm mt-1">
                Have questions about the app, how to use certain features, or
                anything else? We're here to help.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-linear-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Email us:</span>{" "}
              <a
                href="mailto:what2eat1@gmail.com"
                className="text-orange-600 hover:text-orange-700 underline font-medium"
              >
                what2eat1@gmail.com
              </a>
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Contribute
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Are you a food enthusiast or a developer? We welcome contributions
            to expand our dish collection or improve the app. This is an
            open-source project built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
