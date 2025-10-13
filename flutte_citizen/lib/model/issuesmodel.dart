class IssuesModel {
  int? issueId;
  String? title;
  String? description;
  int? categoryId;
  int? userId;
  String? status;
  String? createdAt;
  String? updatedAt;
  Category? category;
  List<Locations>? locations;
  User? user;
  List<Attachments>? attachments;

  IssuesModel(
      {this.issueId,
        this.title,
        this.description,
        this.categoryId,
        this.userId,
        this.status,
        this.createdAt,
        this.updatedAt,
        this.category,
        this.locations,
        this.user,
        this.attachments});

  IssuesModel.fromJson(Map<String, dynamic> json) {
    issueId = json['issue_id'];
    title = json['title'];
    description = json['description'];
    categoryId = json['categoryId'];
    userId = json['userId'];
    status = json['status'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    category = json['category'] != null
        ? new Category.fromJson(json['category'])
        : null;
    if (json['locations'] != null) {
      locations = <Locations>[];
      json['locations'].forEach((v) {
        locations?.add(new Locations.fromJson(v));
      });
    }
    user = json['user'] != null ? new User.fromJson(json['user']) : null;
    if (json['attachments'] != null) {
      attachments = <Attachments>[];
      json['attachments'].forEach((v) {
        attachments?.add(new Attachments.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['issue_id'] = this.issueId;
    data['title'] = this.title;
    data['description'] = this.description;
    data['categoryId'] = this.categoryId;
    data['userId'] = this.userId;
    data['status'] = this.status;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    final category = this.category;
    if (category != null) {
      data['category'] = category.toJson();
    }
    final locations = this.locations;
    if (locations != null) {
      data['locations'] = locations.map((v) => v.toJson()).toList();
    }
    final user = this.user;
    if (user != null) {
      data['user'] = user.toJson();
    }
    final attachments = this.attachments;
    if (attachments != null) {
      data['attachments'] = attachments.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Category {
  int? categoryId;
  String? categoryName;
  String? createdAt;
  String? updatedAt;

  Category(
      {this.categoryId, this.categoryName, this.createdAt, this.updatedAt});

  Category.fromJson(Map<String, dynamic> json) {
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

class Locations {
  int? locationId;
  int? latitude;
  int? longitude;
  String? address;
  int? issueId;
  String? createdAt;
  String? updatedAt;

  Locations(
      {this.locationId,
        this.latitude,
        this.longitude,
        this.address,
        this.issueId,
        this.createdAt,
        this.updatedAt});

  Locations.fromJson(Map<String, dynamic> json) {
    locationId = json['location_id'];
    latitude = json['latitude'];
    longitude = json['longitude'];
    address = json['address'];
    issueId = json['issueId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['location_id'] = this.locationId;
    data['latitude'] = this.latitude;
    data['longitude'] = this.longitude;
    data['address'] = this.address;
    data['issueId'] = this.issueId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}

class User {
  int? userId;
  String? name;
  String? email;
  int? phone;
  String? role;
  String? password;
  String? createdAt;
  String? updatedAt;

  User(
      {this.userId,
        this.name,
        this.email,
        this.phone,
        this.role,
        this.password,
        this.createdAt,
        this.updatedAt});

  User.fromJson(Map<String, dynamic> json) {
    userId = json['user_id'];
    name = json['name'];
    email = json['email'];
    phone = json['phone'];
    role = json['role'];
    password = json['password'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['user_id'] = this.userId;
    data['name'] = this.name;
    data['email'] = this.email;
    data['phone'] = this.phone;
    data['role'] = this.role;
    data['password'] = this.password;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}

class Attachments {
  int? attachmentId;
  String? fileUrl;
  int? issueId;
  String? createdAt;
  String? updatedAt;

  Attachments(
      {this.attachmentId,
        this.fileUrl,
        this.issueId,
        this.createdAt,
        this.updatedAt});

  Attachments.fromJson(Map<String, dynamic> json) {
    attachmentId = json['attachment_id'];
    fileUrl = json['file_url'];
    issueId = json['issueId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['attachment_id'] = this.attachmentId;
    data['file_url'] = this.fileUrl;
    data['issueId'] = this.issueId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}
