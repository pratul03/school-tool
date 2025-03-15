import SingleStudentForm from "@/components/dashboard/forms/students/student-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Users } from "lucide-react";

export default function StudentAdmissionTabs() {
  return (
    <div className="w-full bg-none rounded-lg overflow-hidden">
      <Tabs defaultValue="single" className="w-full">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6">
          <TabsList className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 h-14 rounded-lg bg-gray-100 p-1">
            <TabsTrigger
              value="single"
              className="relative z-10 flex items-center justify-center gap-2 w-full h-full text-sm sm:text-base font-medium tracking-tight transition-colors rounded-md px-2 sm:px-4 py-2"
            >
              <UserPlus className="w-5 h-5" />
              <span className="hidden sm:inline">Single Student Admission</span>
            </TabsTrigger>
            <TabsTrigger
              value="bulk"
              className="relative z-10 flex items-center justify-center gap-2 w-full h-full text-sm sm:text-base font-medium tracking-tight transition-colors rounded-md px-2 sm:px-4 py-2"
            >
              <Users className="w-5 h-5" />
              <span className="hidden sm:inline">Bulk Student Admission</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-4 sm:p-6 bg-gray-50 mt-4 sm:mt-6 rounded-lg shadow-sm mx-4 sm:mx-6">
          <TabsContent
            value="single"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="text-center py-6 sm:py-10 border border-t-4 rounded-lg border-blue-600 bg-gray-50">
              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                Single Student Admission Form
              </p>
              <div className="mx-5">
                <SingleStudentForm />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="bulk"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="text-center py-6 sm:py-10">
              <p className="text-base sm:text-lg font-semibold text-gray-700">
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
