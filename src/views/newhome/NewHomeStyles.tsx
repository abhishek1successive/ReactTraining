import { StyleSheet } from "react-native";

const RED = "#d61d00";

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  scrollContent: {
    paddingBottom: 24,
    paddingTop: 8,
  },

  categoryWrapper: {
    marginBottom: 16,
  },

  categoryScroll: {
    paddingHorizontal: 16,
    gap: 16,
    paddingRight: 24,
  },

  categoryItem: {
    alignItems: "center",
    width: 72,
  },

  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  categoryFav: {
    position: "relative",
  },

  favBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: RED,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },

  favBadgeText: {
    color: "#FFF",
    fontSize: 9,
    fontWeight: "700",
  },

  categoryIconText: {
    fontSize: 28,
  },

  categoryLabel: {
    fontSize: 11,
    color: "#333",
    marginTop: 6,
    textAlign: "center",
  },

  bannerWrapper: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  banner: {
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  bannerLeft: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 16,
    minHeight: 180,
  },

  bannerLeftSmall: {
    fontSize: 10,
    color: "#FFF",
    letterSpacing: 1,
    marginBottom: 4,
  },

  bannerLeftTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFD700",
    marginBottom: 4,
  },

  bannerLeftSub: {
    fontSize: 10,
    color: "#AAA",
    marginBottom: 12,
  },

  bannerCodeBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#444",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  bannerCode: {
    fontSize: 11,
    color: "#FFF",
  },

  bannerCodeHighlight: {
    fontSize: 12,
    color: RED,
    fontWeight: "700",
  },

  bannerBook: {
    fontSize: 10,
    color: "#FFF",
  },

  bannerTc: {
    fontSize: 9,
    color: "#888",
    marginTop: 4,
  },

  bannerRight: {
    flex: 1,
    backgroundColor: RED,
    padding: 16,
    justifyContent: "center",
  },

  bannerRightTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFF",
    lineHeight: 20,
    marginBottom: 8,
  },

  bannerRightSub: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
  },

  section: {
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  seeAll: {
    fontSize: 14,
    color: RED,
    fontWeight: "600",
  },

  moviesScroll: {
    paddingHorizontal: 16,
    gap: 12,
    paddingRight: 24,
  },

  movieCard: {
    width: 120,
  },

  moviePoster: {
    width: 120,
    height: 170,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#DDD",
  },

  moviePosterImage: {
    width: "100%",
    height: "100%",
  },

  movieRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 4,
  },

  movieRatingText: {
    fontSize: 13,
    color: RED,
    fontWeight: "700",
  },

  movieVotes: {
    fontSize: 11,
    color: "#666",
  },

  movieTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
    marginTop: 4,
  },

  bottomSpacer: {
    height: 24,
  },
});

export const headerStyles = StyleSheet.create({
  safe: {
    backgroundColor: "#F5F5F5",
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#F5F5F5",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  icons: {
    flexDirection: "row",
    gap: 12,
  },
  iconBtn: { padding: 8 },
  iconText: { fontSize: 20 },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 14,
    color: RED,
    fontWeight: "500",
  },
  locationArrow: {
    fontSize: 18,
    color: RED,
    marginLeft: 4,
    fontWeight: "700",
  },
});
