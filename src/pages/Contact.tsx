import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

export const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-6 px-50 lg:px-80 pb-20">
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-6xl">Let’s Make It Happen.</h3>
          <p className="text-gray-500">
            Big ideas don't belong in a notebook—they belong on the web. Tell us
            a bit about your project, and let's start building the future
            together.
          </p>
        </div>
      </div>
      <div className="px-20 lg:px-50 pb-20">
        <div className="border border-neutral-400 rounded-3xl grid grid-cols-2 px-10 py-5">
          <div className="flex flex-col gap-5 place-content-center">
            <h3 className="text-4xl">Work Together. Start today.</h3>
            <p className="text-gray-500">
              Please fill out this form, and we will respond to you within one
              business day. Alternatively, you can drop us an{" "}
              <a
                className="text-gray-700 hover:text-gray-900"
                href="mailto:info@bvdevs.com"
              >
                email
              </a>
              .
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};
