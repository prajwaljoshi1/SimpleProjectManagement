# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



# create_table "users", force: :cascade do |t|
#   t.string   "name"
#   t.string   "email"
#   t.string   "password_digest"
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
# end

User.destroy_all()

user1 = User.create(name: 'Praj Joshi',  email: "prazwal@rocketmail.com",    password: "test", password_confirmation: "test", alias: "PJ")
user2 = User.create(name: 'John Wayne',  email: "john@rocketmail.com",    password: "test", password_confirmation: "test", alias: "JW")
user3 = User.create(name: 'Bill Murphy',  email: "bill@rocketmail.com",    password: "test", password_confirmation: "test", alias: "BM")
user4 = User.create(name: 'Tom Hardy',  email: "bill@rocketmail.com",    password: "test", password_confirmation: "test", alias: "TH")


# create_table "projects", force: :cascade do |t|
#   t.string   "title"
#   t.text     "description"
#   t.string   "organisation"
#   t.integer  "project_owner_id"
#   t.datetime "created_at",       null: false
#   t.datetime "updated_at",       null: false
# end

Project.destroy_all()

project1 = Project.create(title: 'A STUPID PROJECT',  description: "Suspendisse iaculis at lectus sit amet aliquam. Mauris at laoreet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget elit velit.",   organisation: "Praj Corp", project_owner_id:1 )
project2 = Project.create(title: 'Instagram-Facebook merge 2020',  description: "Suspendisse iaculis at lectus sit amet aliquam. Mauris at laoreet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget elit velit.",    organisation: "Facebook", project_owner_id:2)
project3 = Project.create(title: 'Playstation 5',  description: "Suspendisse iaculis at lectus sit amet aliquam. Mauris at laoreet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget elit velit.",    organisation: "SONY Computer Entertainment", project_owner_id:3)
project4 = Project.create(title: 'Iphone 7',  description: "Suspendisse iaculis at lectus sit amet aliquam. Mauris at laoreet turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eget elit velit.",    organisation: "Apple",project_owner_id:3)



# create_table "user_projects", force: :cascade do |t|
#   t.integer  "user_id"
#   t.integer  "project_id"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

UserProject.destroy_all()

user_project1 = UserProject.create(user_id: 1, project_id: 1)
user_project2 = UserProject.create(user_id: 2, project_id: 1)
#user_project3 = UserProject.create(user_id: 3, project_id: 1)
user_project4 = UserProject.create(user_id: 4, project_id: 1)
user_project5 = UserProject.create(user_id: 1, project_id: 2)
user_project6 = UserProject.create(user_id: 2, project_id: 3)
user_project7 = UserProject.create(user_id: 3, project_id: 2)
user_project8 = UserProject.create(user_id: 3, project_id: 3)



# create_table "task_lists", force: :cascade do |t|
#   t.string   "title"
#   t.integer  "project_id"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

TaskList.destroy_all()

list1 = TaskList.create(title:"todo",project_id:1)
list2 = TaskList.create(title:"in progress",project_id:1)
list3 = TaskList.create(title:"backlog",project_id:1)
list4 = TaskList.create(title:"done",project_id:1)



# create_table "tasks", force: :cascade do |t|
#   t.string   "title"
#   t.text     "description"
#   t.date     "due_date"
#   t.string   "color"
#   t.integer  "Tasklist_id"
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end


Task.destroy_all();

task1 = Task.create(title:" Prepare the wireframe", description:"make basic wireframe based on client req", due_date:"11/11/16",color:"red",task_list_id:1, position:2, alias:'PJ')
task2 = Task.create(title:"Gather user data", description:"Brush your teeth", due_date:"12/12/16",color:"white",task_list_id:1, position:1, alias:'PJ' )
task3 = Task.create(title:"Choose tools and tech", description:"decide language/framework", due_date:"08/09/16",color:"red",task_list_id:1, position:3, alias:'PJ' )
task4 = Task.create(title:"Divide tasks to team", description:"Assign tasks to everyone", due_date:"01/01/17",color:"blue",task_list_id:1, position:4, alias:'PJ')
