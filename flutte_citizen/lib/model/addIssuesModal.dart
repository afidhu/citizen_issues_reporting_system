class AddIssuesModel {
  final int userId;
  final String title;
  final String description;
  final int categoryId;
  final double latitude;
  final double longitude;
  final String address;

  AddIssuesModel({
    required this.userId,
    required this.title,
    required this.description,
    required this.categoryId,
    required this.latitude,
    required this.longitude,
    required this.address,
  });

  Map<String, dynamic> toJson() {
    return {
      'userId': userId,
      'title': title,
      'description': description,
      'categoryId': categoryId,
      'latitude': latitude,
      'longitude': longitude,
      'address': address,
    };
  }
}
