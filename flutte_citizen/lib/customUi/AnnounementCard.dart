import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controlllers/announcementcontroller.dart';

class Announementcard extends StatefulWidget {
  const Announementcard({super.key});

  @override
  State<Announementcard> createState() => _AnnounementcardState();
}

class _AnnounementcardState extends State<Announementcard> {
  AnnouncementsController announcementsController = Get.put(
    AnnouncementsController(),
  );
  @override
  Widget build(BuildContext context) {
    return Obx(()=> RefreshIndicator(
      elevation: 10,
      backgroundColor: Colors.black,
      strokeWidth: 3,
      displacement: 10,
      child: ListView.builder(
        physics: BouncingScrollPhysics(),
        itemCount: announcementsController.announcements.length,
        itemBuilder: (context, index) {
          var data = announcementsController.announcements[index];
          return GestureDetector(
            onTap: () {},
            child: Card(
              elevation: 1,
              color: Colors.grey[300],
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  spacing: 2,
                  children: [
                    Stack(
                      children: [
                        Image.asset(
                          'images/img.jpeg',
                          cacheHeight: 600,
                          cacheWidth: 700,
                          fit: BoxFit.fill,
                          height: Get.height * 0.3,
                          width: double.infinity,
                        ),

                        // Icon(Icons.image,weight: Get.width*0.9,size: 100,)
                      ],
                    ),
                    Text(
                      'Moreover, research highlights the potential of combining mobile apps, GPS/geolocation, and web dashboards to provide a comprehensive, user-friendly reporting system (Zhang et al., 2020). Integration of photo evidence and geofencing can significantly improve problem verification and accountability in municipal service delivery.',
                      maxLines: 5,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.justify,
                      style: TextStyle(
                        letterSpacing: 1,
                        fontStyle: FontStyle.normal,
                      ),
                    ),
                    // DatePickerDialog(firstDate: DateTime(2020), lastDate: DateTime(2023))
                    SizedBox(height: 5),
                    Row(
                      spacing: 10,
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text('${data.createdAt}'),

                        Text(
                          'Posted By :${data.author!.name.toString()}',
                          style: TextStyle(color: Colors.black),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      ),
      onRefresh: () async {
        print('object');
      },
    ),
    );
  }
}
