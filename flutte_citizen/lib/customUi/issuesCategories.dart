import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../controlllers/categoriescntroller.dart';

class IssuesCategories extends StatefulWidget {
  const IssuesCategories({super.key});

  @override
  State<IssuesCategories> createState() => _IssuesCategoriesState();
}

class _IssuesCategoriesState extends State<IssuesCategories> {
  CategoriesController categoriesController = Get.put(CategoriesController());
  @override
  Widget build(BuildContext context) {
    return Obx(()=> Container(
        margin: EdgeInsets.fromLTRB(1, 1, 1, 4),
        child: ListView.builder(
          physics: BouncingScrollPhysics(),
            itemCount: categoriesController.categoriesAnnouncements.length,
            scrollDirection: Axis.horizontal,
            itemBuilder: (context,index){
              return GestureDetector(
                onTap:()async{
                  categoriesController.getCategoriesAnnouncements(index+1);
                },
                  child: Padding(
                    padding:  EdgeInsets.all(1.0),
                    child: Card(
                      elevation: 8,
                      color: Colors.grey[100],
                      surfaceTintColor: Colors.black,
                        child:Obx(()=> Column(
                          children: [
                            SizedBox(
                              // height:Get.height*0.02,
                              width: Get.width*0.3,
                              child:Container(
                                margin: EdgeInsets.fromLTRB(1, Get.height*0.01, 0, 0),
                                child:Center(child:  Text(categoriesController.categoriesAnnouncements[index].categoryName.toString()),),
                              )
                            )
                             ]
                            )
                        )
                        ),
                      ),

              );
            }
        ),
      ),
    );
  }
}
