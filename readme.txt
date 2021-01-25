# start roscore and rosbridge
roscore
roslaunch rosbridge_server rosbridge_websocket.launch

# run random number publisher node
rosrun ros_random_num_publisher sample_node.py 

# run subscriber node webpage
source env/bin/activate
python app.py


