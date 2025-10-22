"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Anchor, Compass, Route, Users, Star, Map, MapPin, CloudRain, Package, MessageSquare, Award, Send, Mail, Linkedin, Globe, Twitter, Github, Instagram } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [
  {"id":"hero-sailing","url":"https://images.pexels.com/photos/327337/pexels-photo-327337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Aerial view of a luxury cruise ship with a small boat on a vast ocean at sunset."},
  {"id":"split-about-sailing","url":"https://images.pexels.com/photos/15172992/pexels-photo-15172992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A luxurious motor yacht moored in a calm marina during a stunning sunset, reflecting its beauty on the water."},
  {"id":"route-planning","url":"https://images.pexels.com/photos/5302842/pexels-photo-5302842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Three men seated at a table inside a wooden cabin, engaged in thoughtful discussion."},
  {"id":"marina-services","url":"https://images.pexels.com/photos/13644731/pexels-photo-13644731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A breathtaking aerial view of a sunset over Marin County's coastline, capturing vibrant sky colors and water reflections."},
  {"id":"sailing-community","url":"https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Black and white photo capturing the lively atmosphere in a bar with people socializing and a busy bartender serving drinks."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/31453945/pexels-photo-31453945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A ship officer in uniform reflects on glass, displaying confidence against a serene sea backdrop."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/6750244/pexels-photo-6750244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman enjoying sailing on a boat with clear skies and open water, conveying freedom and adventure."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/9756282/pexels-photo-9756282.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple enjoys a romantic dance on a yacht during a vibrant sunset with scenic river views."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/1654497/pexels-photo-1654497.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A top-down shot capturing a navy sailor walking on a ship's blue deck."},
  {"id":"testimonial-5","url":"https://images.pexels.com/photos/4928925/pexels-photo-4928925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Twin yachts with numbered hulls docked at a marina, reflecting on calm waters."},
  {"id":"microsoft-logo","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"google-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"apple-logo","url":"https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Vibrant Apple logo design featuring rainbow colors on a white background."},
  {"id":"amazon-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"meta-logo","url":"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of the Facebook app logo on a digital screen with blurred background."},
  {"id":"netflix-logo","url":"https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A couple enjoys streaming shows on a large TV in a cozy, brick-walled living room."},
  {"id":"spotify-logo","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"team-1","url":"https://images.pexels.com/photos/31453945/pexels-photo-31453945.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A ship officer in uniform reflects on glass, displaying confidence against a serene sea backdrop."},
  {"id":"team-2","url":"https://images.pexels.com/photos/3582560/pexels-photo-3582560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Ship captain operates navigation systems overlooking Istanbul waters. Maritime expertise at its finest."},
  {"id":"team-3","url":"https://images.pexels.com/photos/6585292/pexels-photo-6585292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A peaceful view of a boat harbor with sailboats under a clear blue sky and ample sunlight."},
  {"id":"team-4","url":"https://images.pexels.com/photos/3353685/pexels-photo-3353685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Silhouetted man steering a gondola on a sunny canal, showcasing vibrant urban imagery."},
  {"id":"contact-sailing","url":"https://images.pexels.com/photos/1102910/pexels-photo-1102910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A tranquil scene of a solitary sailboat at sunset reflecting on calm ocean waters under dramatic skies."}
];

export default function Home() {
  const resolveAsset = (assetId: string) => {
    const asset = assetMap.find(a => a.id === assetId);
    return {
      url: asset?.url ?? "/public/images/placeholder.webp",
      alt: asset?.alt ?? "Decorative image"
    };
  };

  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Routes", id: "routes" },
            { name: "Marinas", id: "marinas" },
            { name: "Events", id: "events" },
            { name: "Community", id: "community" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sailing Around The World"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Navigate the World's Oceans"
          description="Connect with fellow blue-water sailors, discover proven routes, find reliable marina services, and join exclusive sailing events worldwide."
          tag="Global Sailing Community"
          tagIcon={Anchor}
          buttons={[
            { text: "Book Now", href: "contact" },
            { text: "Explore Routes", href: "routes" }
          ]}
          imageSrc={resolveAsset("hero-sailing").url}
          imageAlt={resolveAsset("hero-sailing").alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Your Gateway to Blue-Water Adventures"
          description="Join a community of experienced sailors who've navigated every ocean. Get insider knowledge, reliable resources, and connections that make long-distance sailing safer and more rewarding."
          tag="About Us"
          tagIcon={Compass}
          bulletPoints={[
            {
              title: "Proven Routes",
              description: "Detailed navigation guides from sailors who've completed these passages multiple times",
              icon: Route
            },
            {
              title: "Marina Network",
              description: "Comprehensive database of marina facilities, services, and sailor reviews worldwide",
              icon: Anchor
            },
            {
              title: "Expert Community",
              description: "Connect with experienced blue-water cruisers for advice, crew opportunities, and friendships",
              icon: Users
            }
          ]}
          imageSrc={resolveAsset("split-about-sailing").url}
          imageAlt={resolveAsset("split-about-sailing").alt}
          imagePosition="left"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Everything You Need for Ocean Sailing"
          description="Comprehensive resources designed by sailors, for sailors. From route planning to community connections."
          tag="Features"
          tagIcon={Star}
          features={[
            {
              title: "Route Planning",
              description: "Interactive maps with weather patterns, currents, and seasonal recommendations from experienced sailors",
              icon: Map,
              button: { text: "View Routes", href: "routes" }
            },
            {
              title: "Marina Directory",
              description: "Complete facility information, pricing, services, and real sailor reviews for ports worldwide",
              icon: MapPin,
              button: { text: "Find Marinas", href: "marinas" }
            },
            {
              title: "Weather Routing",
              description: "Advanced weather analysis and routing suggestions for optimal passage planning",
              icon: CloudRain,
              button: { text: "Weather Tools", href: "weather" }
            },
            {
              title: "Crew Network",
              description: "Connect with qualified crew members or find experienced skippers for your next adventure",
              icon: Users,
              button: { text: "Find Crew", href: "crew" }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Premium Sailing Resources"
          description="Professional-grade tools and services for serious blue-water sailors"
          tag="Services"
          tagIcon={Package}
          products={[
            {
              id: "1",
              name: "Complete Route Package - Atlantic",
              price: "$299",
              imageSrc: resolveAsset("route-planning").url,
              imageAlt: resolveAsset("route-planning").alt,
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Marina Services Directory - Caribbean",
              price: "$149",
              imageSrc: resolveAsset("marina-services").url,
              imageAlt: resolveAsset("marina-services").alt,
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Sailing Community Membership - Annual",
              price: "$199",
              imageSrc: resolveAsset("sailing-community").url,
              imageAlt: resolveAsset("sailing-community").alt,
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Stories from the Seven Seas"
          description="Real experiences from sailors who've navigated the world's oceans with our guidance"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Captain Sarah Johnson",
              role: "Atlantic Crossing Veteran",
              testimonial: "This community made our transatlantic crossing safe and memorable. The route guidance was invaluable, and the marina recommendations were spot-on.",
              imageSrc: resolveAsset("testimonial-1").url,
              imageAlt: resolveAsset("testimonial-1").alt
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Pacific Ocean Explorer",
              testimonial: "Five years of blue-water sailing, and this is still my go-to resource. The weather routing tools have saved us from countless storms.",
              imageSrc: resolveAsset("testimonial-2").url,
              imageAlt: resolveAsset("testimonial-2").alt
            },
            {
              id: "3",
              name: "James & Emily Chen",
              role: "Circumnavigation Couple",
              testimonial: "We've sailed 40,000 nautical miles using these routes. The community support and detailed marina information made our dream circumnavigation possible.",
              imageSrc: resolveAsset("testimonial-3").url,
              imageAlt: resolveAsset("testimonial-3").alt
            },
            {
              id: "4",
              name: "Captain Tom Mitchell",
              role: "Caribbean Specialist",
              testimonial: "After 20 years of Caribbean sailing, I still discover new anchorages and services through this network. The local knowledge is unmatched.",
              imageSrc: resolveAsset("testimonial-4").url,
              imageAlt: resolveAsset("testimonial-4").alt
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Solo Circumnavigator",
              testimonial: "As a solo sailor, having this community for support and the detailed route information gave me confidence to complete my solo circumnavigation.",
              imageSrc: resolveAsset("testimonial-5").url,
              imageAlt: resolveAsset("testimonial-5").alt
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Leading Maritime Organizations"
          description="Our resources are recognized and used by professional sailing organizations worldwide"
          tag="Partners"
          tagIcon={Award}
          logos={[
            resolveAsset("microsoft-logo").url,
            resolveAsset("google-logo").url,
            resolveAsset("apple-logo").url,
            resolveAsset("amazon-logo").url,
            resolveAsset("netflix-logo").url
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Your Navigation Experts"
          description="Our team combines decades of blue-water sailing experience with modern technology"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Captain Alex Morgan",
              role: "Founder & Route Specialist",
              description: "50,000+ nautical miles including two circumnavigations. Former merchant marine officer with expertise in weather routing and passage planning.",
              imageSrc: resolveAsset("team-1").url,
              imageAlt: resolveAsset("team-1").alt,
              socialLinks: [
                { icon: Mail, url: "mailto:alex@sailingworld.com" },
                { icon: Linkedin, url: "https://linkedin.com/in/alexmorgan" }
              ]
            },
            {
              id: "2",
              name: "Isabella Cruz",
              role: "Marina Relations Director",
              description: "15 years managing marina relationships across the Caribbean and Mediterranean. Yacht club commodore and certified sailing instructor.",
              imageSrc: resolveAsset("team-2").url,
              imageAlt: resolveAsset("team-2").alt,
              socialLinks: [
                { icon: Mail, url: "mailto:isabella@sailingworld.com" },
                { icon: Globe, url: "https://isabellacruz.com" }
              ]
            },
            {
              id: "3",
              name: "David Kim",
              role: "Technology & Weather Expert",
              description: "Former meteorologist turned sailor. Develops our weather routing algorithms and manages our technology platforms for optimal passage planning.",
              imageSrc: resolveAsset("team-3").url,
              imageAlt: resolveAsset("team-3").alt,
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/davidkim" },
                { icon: Github, url: "https://github.com/davidkim" }
              ]
            },
            {
              id: "4",
              name: "Sophie Laurent",
              role: "Community Manager",
              description: "Professional sailing guide with extensive experience in crew placement and sailing event coordination. Fluent in five languages.",
              imageSrc: resolveAsset("team-4").url,
              imageAlt: resolveAsset("team-4").alt,
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/sophielaurent" },
                { icon: Mail, url: "mailto:sophie@sailingworld.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Explore the World's Oceans?"
          description="Join thousands of sailors who trust our guidance for their blue-water adventures. Get exclusive access to routes, marina information, and our sailing community."
          tagIcon={Send}
          imageSrc={resolveAsset("contact-sailing").url}
          imageAlt={resolveAsset("contact-sailing").alt}
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Book Now"
          termsText="By booking, you agree to receive sailing updates and community information. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "Route Planning", href: "routes" },
                { label: "Marina Directory", href: "marinas" },
                { label: "Weather Tools", href: "weather" },
                { label: "Sailing Events", href: "events" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Join Network", href: "community" },
                { label: "Find Crew", href: "crew" },
                { label: "Share Experience", href: "stories" },
                { label: "Discussion Forum", href: "forum" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Sailing Guides", href: "guides" },
                { label: "Safety Information", href: "safety" },
                { label: "Equipment Reviews", href: "equipment" },
                { label: "Newsletter", href: "newsletter" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Help Center", href: "help" },
                { label: "Account", href: "account" },
                { label: "Feedback", href: "feedback" }
              ]
            }
          ]}
          copyrightText="© 2025 | Sailing Around The World"
        />
      </div>
    </ThemeProvider>
  );
}