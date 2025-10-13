import 'package:flutte_citizen/views/reportIssues.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/get_core/src/get_main.dart';

import '../tabBar/histories.dart';
import '../tabBar/issues.dart';
import '../tabBar/announcements.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with TickerProviderStateMixin{


  late TabController _tabController;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();

     _tabController =TabController(length: 3, vsync:this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.amber,
        actions: [
          PopupMenuButton(
              itemBuilder:(_){
                return [
                  PopupMenuItem(child: Text('data')),
                  PopupMenuItem(child: Text('data')),
                  PopupMenuItem(child: Text('data'))
                ];
              }
          )
        ],
        bottom: TabBar(
          controller: _tabController,
            tabs: [
          Tab(child: Text('Issues'),),
          Tab(child: Text('Announces'),),
          Tab(child: Text('Histories'),)
        ]),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          IssuesPage(),
          // Center(child: Text('data1'),),
          Announcements(),
          // Center(child: Text('Announces'),),
          HistoriesPage()
          // Center(child: Text('data3'),),
        ],
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: (){
            Get.to(()=>ReportIssues(),fullscreenDialog: true);
          },
        child:Icon(Icons.add),
      ),
    );
  }
}
