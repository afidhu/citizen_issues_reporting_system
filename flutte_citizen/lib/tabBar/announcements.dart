import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controlllers/issuesController.dart';
import '../customUi/AnnounementCard.dart';
import '../customUi/issuesCategories.dart';
import '../location/devicelocation.dart';

class Announcements extends StatefulWidget {
  const Announcements({super.key});

  @override
  State<Announcements> createState() => _AnnouncementsState();
}

class _AnnouncementsState extends State<Announcements> {
  DeviceLocationController deviceLocationController = Get.put(DeviceLocationController());
  IssuesController issuesController = Get.put(IssuesController());
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(5),
      child: Column(
        children: [
          SizedBox(
            height: Get.height*0.09,
            width: double.infinity,
            child:Center(child:  IssuesCategories(),)
          ),
          Expanded(
            child: Announementcard()
          ),
        ],
      ),
    );


  }
}
