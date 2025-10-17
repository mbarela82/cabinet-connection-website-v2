import PortfolioGallery from "@/components/PortfolioGallery";

// The corrected "flat" project structure
interface Project {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  images:
    | {
        url: string;
      }[]
    | null;
}

// Corrected fetch function
async function getProjects(): Promise<Project[]> {
  const strapiUrl = process.env.STRAPI_URL || "http://localhost:1337";
  try {
    const res = await fetch(`${strapiUrl}/api/projects?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    return data.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <main>
      {/* Page Header */}
      <div className="bg-slate-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-bold">Our Work</h1>
          <p className="text-xl text-muted-foreground mt-2">
            A showcase of our commitment to quality craftsmanship.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto py-20 px-4">
        <PortfolioGallery projects={projects} />
      </div>
    </main>
  );
}
