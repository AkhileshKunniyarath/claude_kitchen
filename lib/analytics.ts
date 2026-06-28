/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function pushEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.dataLayer) window.dataLayer = [];
  window.dataLayer.push({ event: eventName, ...params });
}

export const analyticsEvents = {
  whatsappOrderClick: (placement: string, dishName?: string) =>
    pushEvent("whatsapp_order_click", {
      page_path: window.location.pathname,
      placement,
      dish_name: dishName ?? "",
      campaign_source: new URLSearchParams(window.location.search).get(
        "utm_source"
      ) ?? "",
    }),

  phoneClick: (placement: string) =>
    pushEvent("phone_click", {
      page_path: window.location.pathname,
      placement,
    }),

  mapDirectionsClick: (placement: string) =>
    pushEvent("map_directions_click", {
      page_path: window.location.pathname,
      placement,
    }),

  menuView: (categoryName: string) =>
    pushEvent("menu_view", { category_name: categoryName }),

  dishInterest: (dishName: string, categoryName: string, placement: string) =>
    pushEvent("dish_interest", {
      dish_name: dishName,
      category_name: categoryName,
      placement,
    }),

  cateringEnquiryClick: (placement: string) =>
    pushEvent("catering_enquiry_click", {
      page_path: window.location.pathname,
      placement,
    }),

  instagramClick: (placement: string) =>
    pushEvent("instagram_click", {
      page_path: window.location.pathname,
      placement,
    }),

  storySceneComplete: (sceneName: string, percentComplete: number) =>
    pushEvent("story_scene_complete", {
      scene_name: sceneName,
      percent_complete: percentComplete,
    }),

  galleryEngagement: (imageGroup: string) =>
    pushEvent("gallery_engagement", { image_group: imageGroup }),

  outboundLinkClick: (linkType: string, destinationDomain: string) =>
    pushEvent("outbound_link_click", {
      link_type: linkType,
      destination_domain: destinationDomain,
    }),
};
