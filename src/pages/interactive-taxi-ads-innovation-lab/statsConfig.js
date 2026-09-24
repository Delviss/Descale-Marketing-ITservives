// Centralized, unverified marketing claims used across the taxi-ads page
// (hero stats, technology showcase, homepage teaser). Keeping them in one
// place means updating a real, sourced figure only requires an edit here.
//
// TODO(owner): every value below is a placeholder inherited from the
// original page copy — none of it has been verified or sourced. Confirm
// each figure (or remove it) before this page is treated as production
// marketing claims. In particular:
//  - "Patent-Pending Innovation" implies an actual, filed patent application.
//    Confirm the application number/status, or drop the claim.
//  - "Cities Covered" / "Daily Impressions" / "Total Impressions" read as
//    real operating metrics. Confirm the underlying data source, or relabel
//    as a projection/target if no real campaign has run yet.
export const TAXI_ADS_STATS = {
  citiesCovered: "475+", // TODO(owner): verify / source
  dailyImpressions: "2.4M", // TODO(owner): verify / source
  totalImpressions: "2.4M", // TODO(owner): verify / source
  averageRoi: "340%", // TODO(owner): verify / source
  clientSatisfaction: "98%", // TODO(owner): verify / source
  patentPendingLabel: "Patent-Pending Innovation", // TODO(owner): confirm patent application status before publishing this claim
};
