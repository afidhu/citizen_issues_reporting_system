class CategoriesAnnouncements {
  int? categoryId;
  String? categoryName;
  String? createdAt;
  String? updatedAt;
  List<Announcements>? announcements;

  CategoriesAnnouncements(
      {this.categoryId,
        this.categoryName,
        this.createdAt,
        this.updatedAt,
        this.announcements});

  CategoriesAnnouncements.fromJson(Map<String, dynamic> json) {
    categoryId = json['category_id'];
    categoryName = json['category_name'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    if (json['announcements'] != null) {
      announcements = <Announcements>[];
      json['announcements'].forEach((v) {
        announcements?.add(new Announcements.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['category_id'] = this.categoryId;
    data['category_name'] = this.categoryName;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    final announcements = this.announcements;
    if (announcements != null) {
      data['announcements'] =
          announcements.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Announcements {
  int? announcementId;
  String? title;
  String? content;
  int? authorId;
  int? categoryId;
  String? createdAt;
  String? updatedAt;
  List<Attachments>? attachments;
  Author? author;

  Announcements(
      {this.announcementId,
        this.title,
        this.content,
        this.authorId,
        this.categoryId,
        this.createdAt,
        this.updatedAt,
        this.attachments,
        this.author});

  Announcements.fromJson(Map<String, dynamic> json) {
    announcementId = json['announcement_id'];
    title = json['title'];
    content = json['content'];
    authorId = json['authorId'];
    categoryId = json['categoryId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
    if (json['attachments'] != null) {
      attachments = <Attachments>[];
      json['attachments'].forEach((v) {
        attachments?.add(new Attachments.fromJson(v));
      });
    }
    author =
    json['author'] != null ? new Author.fromJson(json['author']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['announcement_id'] = this.announcementId;
    data['title'] = this.title;
    data['content'] = this.content;
    data['authorId'] = this.authorId;
    data['categoryId'] = this.categoryId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    final attachments = this.attachments;
    if (attachments != null) {
      data['attachments'] = attachments.map((v) => v.toJson()).toList();
    }
    final author = this.author;
    if (author != null) {
      data['author'] = author.toJson();
    }
    return data;
  }
}

class Attachments {
  int? attachmentId;
  String? fileUrl;
  int ?announcementId;
  String? createdAt;
  String? updatedAt;

  Attachments(
      {this.attachmentId,
        this.fileUrl,
        this.announcementId,
        this.createdAt,
        this.updatedAt});

  Attachments.fromJson(Map<String, dynamic> json) {
    attachmentId = json['attachment_id'];
    fileUrl = json['file_url'];
    announcementId = json['announcementId'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['attachment_id'] = this.attachmentId;
    data['file_url'] = this.fileUrl;
    data['announcementId'] = this.announcementId;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}

class Author {
  int? userId;
  String? name;
  String? email;
  int? phone;
  String? role;
  String? password;
  String? createdAt;
  String? updatedAt;

  Author(
      {this.userId,
        this.name,
        this.email,
        this.phone,
        this.role,
        this.password,
        this.createdAt,
        this.updatedAt});

  Author.fromJson(Map<String, dynamic> json) {
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
