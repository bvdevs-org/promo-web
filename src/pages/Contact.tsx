export const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-6 px-50 lg:px-80 pb-20">
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-6xl">Let’s Make It Happen.</h3>
          <p className="text-gray-700">
            Big ideas don't belong in a notebook—they belong on the web. Tell us
            a bit about your project, and let's start building the future
            together.
          </p>
        </div>
      </div>
      <div className="px-20 lg:px-50">
        <div className="border border-neutral-400 rounded-3xl grid grid-cols-2 p-10">
          <div className="flex flex-col gap-2 place-content-center">
            <h3 className="text-xl">Work Together. Start today.</h3>
            <p className="text-gray-700">
              Please fill out this form, and we will respond to you within one
              business day. Alternatively, you can drop us an email.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
