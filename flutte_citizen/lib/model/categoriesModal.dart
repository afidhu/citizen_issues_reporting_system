class Categories{
  String name;
  int Id;
  Categories({required this.Id,required this.name});
}



class IssuesCategoryModel {
  int? categoryId;
  String? categoryName;
  String? createdAt;
  String? updatedAt;

  IssuesCategoryModel(
      {this.categoryId, this.categoryName, this.createdAt, this.updatedAt});

  IssuesCategoryModel.fromJson(Map<String, dynamic> json) {
    categoryId = json['category_id'];
    categoryName = json['category_name'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['category_id'] = this.categoryId;
    data['category_name'] = this.categoryName;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}
