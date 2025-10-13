import 'package:flutte_citizen/ApiProvider/Apiprovider.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:intl/intl.dart';
import 'package:video_player/video_player.dart';

import '../ActionButtons/commentbutton.dart';
import '../ActionButtons/likebutton.dart';
import '../model/issuesmodel.dart';
import '../views/singleissuesView.dart';

class IssuesCard extends StatelessWidget {
  final IssuesModel issuesList;
  const IssuesCard({super.key, required this.issuesList});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: GestureDetector(
            onTap: () {
              Get.to(() => SingleIssuesView(),
                  fullscreenDialog: true, arguments: issuesList);
            },
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  decoration: BoxDecoration(
                    boxShadow: [
                      BoxShadow(
                        blurStyle: BlurStyle.solid,
                        blurRadius: 20,
                        color: Colors.white,
                      )
                    ],
                  ),
                  child: issuesList.attachments!.isNotEmpty
                      ? _buildAttachmentWidget(
                      issuesList.attachments![0].fileUrl)
                      : Container(
                    height: 200,
                    child: Center(child: Text('No attachment')),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  '${issuesList.title}',
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  '${issuesList.description}',
                  maxLines: 3,
                  textAlign: TextAlign.justify,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(letterSpacing: 1),
                ),
                const SizedBox(height: 8),
                SizedBox(
                  height: Get.width * 0.1,
                  width: Get.width * 1.1,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Text(
                        DateFormat('MMM d, y – hh:mm a').format(
                            DateTime.parse(issuesList.createdAt.toString())),
                        style: const TextStyle(color: Colors.black),
                      ),
                      Text(
                        '| ${issuesList.user?.name.toString()}',
                        style: const TextStyle(color: Colors.black),
                      ),
                      MaterialButton(
                        color: Colors.yellow,
                        shape: const StarBorder.polygon(squash: 1),
                        onPressed: () {},
                        child: const Text(
                          'Pending',
                          style: TextStyle(color: Colors.black),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  // Helper: build image or video
  Widget _buildAttachmentWidget(String? fileUrl) {
    if (fileUrl == null) {
      return Container(
        height: 200,
        child: const Center(child: Text('No file URL')),
      );
    }

    final fullUrl = '${ApiUrls.baseUrl}$fileUrl';

    if (_isVideo(fileUrl)) {
      final controller = VideoPlayerController.network(fullUrl);

      return FutureBuilder(
        future: controller.initialize(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return AspectRatio(
              aspectRatio: controller.value.aspectRatio,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  VideoPlayer(controller),
                  IconButton(
                    icon: Icon(
                      controller.value.isPlaying
                          ? Icons.pause
                          : Icons.play_arrow,
                      color: Colors.white,
                      size: 40,
                    ),
                    onPressed: () {
                      controller.value.isPlaying
                          ? controller.pause()
                          : controller.play();
                    },
                  ),
                ],
              ),
            );
          } else {
            return Container(
              height: 200,
              color: Colors.black12,
              child: const Center(child: CircularProgressIndicator()),
            );
          }
        },
      );
    } else {
      return Image.network(
        fullUrl,
        height: 200,
        width: double.infinity,
        fit: BoxFit.cover,
        errorBuilder: (context, error, stackTrace) {
          return Container(
            height: 200,
            color: Colors.grey[300],
            child: const Center(child: Text('Error loading image')),
          );
        },
      );
    }
  }

  bool _isVideo(String fileUrl) {
    final lower = fileUrl.toLowerCase();
    return lower.endsWith('.mp4') ||
        lower.endsWith('.mov') ||
        lower.endsWith('.avi') ||
        lower.endsWith('.mkv');
  }
}
