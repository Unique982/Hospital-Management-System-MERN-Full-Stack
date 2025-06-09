const Setting = () => {
  return (
    <div className="relative  mt-10 rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="flex items-start justify-between rounded-t border-b border-gray-200 p-5 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Settings Page
        </h3>
      </div>
      <div className="space-y-6 p-6">
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
            {/* Page Title */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="page-title"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Page Title
              </label>
              <input
                type="text"
                name="page-title"
                id="page-title"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="My Website"
                required
              />
            </div>

            {/* Contact Number */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="contact-number"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contact-number"
                id="contact-number"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="+1 234 567 890"
                required
              />
            </div>

            {/* Facebook URL */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="facebook"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Facebook URL
              </label>
              <input
                type="url"
                name="facebook"
                id="facebook"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="https://facebook.com/yourpage"
              />
            </div>

            {/* YouTube URL */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="youtube"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                YouTube URL
              </label>
              <input
                type="url"
                name="youtube"
                id="youtube"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="https://youtube.com/channel/yourchannel"
              />
            </div>

            {/* GitHub URL */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="github"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                GitHub URL
              </label>
              <input
                type="url"
                name="github"
                id="github"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="https://github.com/yourprofile"
              />
            </div>

            {/* Instagram URL */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="instagram"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Instagram URL
              </label>
              <input
                type="url"
                name="instagram"
                id="instagram"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="https://instagram.com/yourprofile"
              />
            </div>

            {/* Address */}
            <div className="col-span-6">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Address
              </label>
              <textarea
                id="address"
                rows={3}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-900
                           focus:border-cyan-600 focus:ring-cyan-600 dark:border-gray-600
                           dark:bg-gray-800 dark:text-gray-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 sm:text-sm"
                placeholder="Your address here..."
              />
            </div>

            {/* Logo Upload */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="logo"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Logo Upload
              </label>
              <input
                type="file"
                name="logo"
                id="logo"
                accept="image/*"
                className="dark:file:hover:bg-dark-600 block w-full text-sm
                           text-gray-900 file:mr-4 file:rounded file:border-0 file:bg-green-600 file:px-4
                           file:py-2 file:text-white
                           hover:file:bg-green-700 dark:file:bg-green-500"
              />
            </div>

            {/* Ads Banner Upload */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="ads-banner"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ads Banner Upload
              </label>
              <input
                type="file"
                name="ads-banner"
                id="ads-banner"
                accept="image/*"
                className="block w-full text-sm text-gray-900
                           file:mr-4 file:rounded file:border-0 file:bg-green-600 file:px-4 file:py-2
                           file:text-white hover:file:bg-green-700
                           dark:file:bg-green-500 dark:file:hover:bg-green-600"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
        <button
          type="submit"
          className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700
                     focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Setting;
