export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-amber-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          About What To Eat?
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            What To Eat? is a simple food picker tool designed to help you
            decide what to cook or order when you're feeling indecisive. We
            understand that choosing what to eat can sometimes be overwhelming,
            especially with so many delicious options available.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our app features a curated collection of dishes from various regions
            of India, along with popular international cuisines. Whether you're
            craving something spicy, healthy, comforting, or indulgent, our
            smart filters help you discover the perfect meal for any occasion.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Smart filtering by meal type, diet, mood, cooking time, price, and
              region
            </li>
            <li>Random dish picker for spontaneous food decisions</li>
            <li>Save your favorite dishes for quick access</li>
            <li>Share your picks with friends and family</li>
            <li>Mobile-first design for on-the-go decision making</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mt-6">
            Whether you're a home cook looking for inspiration or someone trying
            to decide what to order, What To Eat? makes food decisions fun and
            effortless.
          </p>
        </div>
      </div>
    </div>
  );
}
