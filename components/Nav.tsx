import React from "react";
import { items } from "../data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  // Split the pathname into parts based on "/"
  const pathParts = pathname.split("/").filter(Boolean);

  // Handle breadcrumbs dynamically
  const breadcrumbs = [
    { label: "Home", href: "/" }, // Ensure Home always links to the root
    ...pathParts
      .map((part, index) => {
        // Find a matching breadcrumb from the 'items' array
        const matchingItem = items.find((item) => item.url.includes(part));
        return matchingItem
          ? {
              label: matchingItem.title,
              href: "/" + pathParts.slice(0, index + 1).join("/"),
            }
          : {
              label: part.charAt(0).toUpperCase() + part.slice(1), // Fallback to a capitalized label
              href: "/" + pathParts.slice(0, index + 1).join("/"),
            };
      })
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList >
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={breadcrumb.href}>
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Nav;

