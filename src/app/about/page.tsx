export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center py-24 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* This is the dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* This is your text content */}
        <div className="relative container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-xl mt-2">
            A Family Tradition of Craftsmanship Since 1994
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-20 px-4 max-w-3xl space-y-8">
        <div className="text-lg text-slate-700 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            A Hands-On Family Team
          </h2>
          <p>
            In 1994, our founder, Mario Barela, started Cabinet Connection with
            a simple mission: to provide New Mexico families with the best
            possible cabinetry and service at an honest price. Over three
            decades later, that mission remains the heart of our business, and
            our family remains at the heart of the work.
          </p>
          <p>
            The business today is a true family collaboration. Mario continues
            to lead the company, and you'll find both him and his son, Mark,
            working directly with clients on sales and design. Overseeing shop
            production is Mario's brother, John. But the truth is, you'll find
            all three of them—Mario, Mark, and John—in the workshop, personally
            crafting the cabinets that carry their family name. This hands-on
            approach from our leadership team is our core commitment to quality.
          </p>
        </div>

        <div className="text-lg text-slate-700 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Promise to You
          </h2>
          <p>
            For us, this has always been more than just a business—it's our
            family name on every cabinet we build. We are immensely proud of our
            long history in this community. It's a legacy of experience that
            allows us to deliver the lasting quality and dedicated service our
            customers deserve. We believe in what we do, and we're honored to
            continue building on that tradition.
          </p>
        </div>
      </div>
    </main>
  );
}
