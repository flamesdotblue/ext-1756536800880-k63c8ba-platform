export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-sm bg-neutral-900" />
            <span className="text-base font-semibold">Sillion</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-neutral-700">
            We are a scholarly partner in education, bridging powerful AI with the human mission of teaching.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li><a href="#" className="hover:text-neutral-900">About</a></li>
            <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
            <li><a href="#" className="hover:text-neutral-900">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-neutral-900">Resources</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li><a href="#" className="hover:text-neutral-900">Security</a></li>
            <li><a href="#" className="hover:text-neutral-900">Documentation</a></li>
            <li><a href="#" className="hover:text-neutral-900">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-600 md:flex-row md:px-6">
          <div>© {new Date().getFullYear()} Sillion. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
