import SingleStudentForm from "@/components/dashboard/forms/students/student-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Users } from "lucide-react";

export default function StudentAdmissionTabs() {
  return (
    <div className=" w-full bg-none lg:max-w-5xl rounded-lg overflow-hidden mx-auto">
      <Tabs defaultValue="single" className="w-full">
        <div className="px-5 pt-6">
          <TabsList className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 h-14 rounded-lg bg-gray-100 p-1">
            <TabsTrigger
              value="single"
              className="relative z-10 flex items-center justify-center gap-2 w-full h-full  text-base font-medium tracking-tight transition-colors rounded-md px-4 py-2"
            >
              <UserPlus className="w-5 h-5" />
              <span className="hidden sm:inline">Single Student Admission</span>
            </TabsTrigger>
            <TabsTrigger
              value="bulk"
              className="relative z-10 flex items-center justify-center gap-2 w-full h-full text-base font-medium tracking-tight transition-colors rounded-md px-4 py-2"
            >
              <Users className="w-5 h-5" />
              <span className="hidden sm:inline">Bulk Student Admission</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className=" max-w-5xl w-full p-6 bg-gray-50 md:mt-4 mt-6 rounded-lg shadow-sm mx-auto">
          <TabsContent
            value="single"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="text-center md:py-6 py-10 border border-t-4 rounded-lg border-blue-600 bg-gray-50">
              <p className="text-xl font-semibold text-gray-900 tracking-tight">
                Single Student Admission Form
              </p>
              <div className="mx-5 mt-6 md:mt-2">
                <SingleStudentForm />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="bulk"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="text-center md:py-6 py-10">
              <p className="md:text-base text-lg font-semibold text-gray-700">
                Bulk Student Admission Form
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                (Upcoming - Under Development)
              </p>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
