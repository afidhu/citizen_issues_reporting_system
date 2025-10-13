import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../ActionButtons/commentbutton.dart';
import '../ActionButtons/likebutton.dart';
import '../controlllers/issuesController.dart';
import '../model/issuesmodel.dart';
import 'editIssuesDetail.dart';
class SingleIssuesView extends StatefulWidget {
  const SingleIssuesView({super.key});

  @override
  State<SingleIssuesView> createState() => _SingleIssuesViewState();
}

class _SingleIssuesViewState extends State<SingleIssuesView> {
  IssuesController issuesController =Get.put(IssuesController());

  IssuesModel singleIssues =Get.arguments;
  @override
  Widget build(BuildContext context) {
    return  Container(
      color: Colors.grey[200],
      child:  Stack(
        // fit: StackFit.expand,
        children: [
          Positioned(
              child: Container(
                margin: EdgeInsets.fromLTRB(1, 10, 1, 1),
                child: Card(
                  child: SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Stack(
                            children: [
                              Image.asset('images/pipe.jpeg'),
                                Positioned(
                                  // top: 20,
                                  right: Get.width*0.01,
                                  bottom: 0,
                                  child: IconButton(
                                    style: IconButton.styleFrom(
                                        backgroundColor: Colors.black.withOpacity(0.5)
                                    ),
                                    onPressed: (){
                                      Get.to(()=>EditIssuesDetail(),fullscreenDialog: true,curve: Curves.bounceOut,duration: Duration(seconds: 2),transition: Transition.downToUp,);
                                    },
                                    icon:  Icon(Icons.edit, size: 30, color: Colors.white,),
                                  ),
                                ),
                              Positioned(
                                // top: 20,
                                right: Get.width*0.01,
                                bottom: Get.height*0.06,
                                child: IconButton(
                                  style: IconButton.styleFrom(
                                      backgroundColor: Colors.black.withOpacity(0.5)
                                  ),
                                  onPressed: (){
                                    issuesController.deleteIssuesDiolog(singleIssues.title.toString());
                                     },
                                  icon:  Icon(Icons.delete, size: 30, color: Colors.red,),
                                ),
                              ),
                              // Image.network('https://le-cdn.hibuwebsites.com/176bbe9cef2344728a7ec5ca5296093f/dms3rep/multi/opt/Broken-Water-Pipe-Burst-Stephens-Plumbing-Website-Image_0-1920w.jpg',fit:BoxFit.fill,height: 300,width: double.infinity , cacheHeight: 600,cacheWidth: 700, ),

                            ],
                          ),
                          SizedBox(height: 8),
                          Text('${singleIssues.title}',
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          SizedBox(height: 8),
                          Text('Search from thousands of royalty-free Broken Pipe stock images and video for your next project. Download royalty-free stock photos, vectors, HD footage and ,Search from thousands of royalty-free Broken Pipe stock images and video for your next project. Download royalty-free stock photos, vectors, HD footage and',
                            textAlign: TextAlign.justify,
                            style: TextStyle(
                              letterSpacing: 1,
                            ),
                          ),
                          SizedBox(height: 8),
                          Container(
                            margin: EdgeInsets.fromLTRB(250, 1, 1, 1),
                            decoration: BoxDecoration(
                              color: Colors.grey,
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: [
                                CommentButton(),
                                LikeButton()
                              ],
                            ),
                          ),

                        ],
                      ),
                    ),
                  ),
                ),
              )
          ),
          Positioned(
            top: 20,
            left: 10,
            child: Column(
              children: [
                IconButton(
                  style: IconButton.styleFrom(
                      backgroundColor: Colors.black.withOpacity(0.5)
                  ),
                  onPressed: (){
                    Get.back();
                  },
                  icon:  Icon(Icons.close, size: 30, color: Colors.red,),
                ),
              ],
            )
          ),
        ],
      ),
    );
  }
}
