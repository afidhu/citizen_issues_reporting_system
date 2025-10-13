import 'package:flutte_citizen/customUi/issuesCard.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controlllers/issuesController.dart';

class IssuesPage extends StatefulWidget {
  const IssuesPage({super.key});

  @override
  State<IssuesPage> createState() => _IssuesPageState();
}




class _IssuesPageState extends State<IssuesPage> {
  IssuesController issuesController = Get.put(IssuesController());
  @override
  Widget build(BuildContext context) {
    return Obx(()=>  Container(
      margin: EdgeInsets.all(8),
          child: Align(
            alignment: Alignment.topCenter,
            child: SizedBox(
              child: Container(
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  borderRadius: BorderRadius.circular(10),
                ),
                child:RefreshIndicator(
                  onRefresh: ()async{
                    await issuesController.getIssues();
                  },
                  child:ListView.builder(
                    physics: BouncingScrollPhysics(),
                    itemCount: issuesController.issuesData.length,
                      itemBuilder: (context,index){
                      var data = issuesController.issuesData[index];
                        return  Container(
                          margin: EdgeInsetsGeometry.directional(top: 0),
                          child: IssuesCard(issuesList:data),
                        );
                      }
                  ),
                )
              ),
            ),
          )
    ));
  }
}
