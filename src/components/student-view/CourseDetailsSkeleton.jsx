import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function CourseDetailsSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20" role="status" aria-live="polite" aria-busy="true">
            <span className="sr-only">Loading course details...</span>

            {/* Hero Section Skeleton */}
            <div className="bg-gray-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
                    <div className="max-w-4xl">
                        {/* Category/Breadcrumb */}
                        <div className="mb-4">
                            <Skeleton className="h-4 w-40 bg-gray-700" />
                        </div>

                        {/* Title */}
                        <Skeleton className="h-12 w-3/4 mb-6 bg-gray-700" />

                        {/* Subtitle */}
                        <Skeleton className="h-6 w-full max-w-2xl mb-8 bg-gray-700" />
                        <Skeleton className="h-6 w-2/3 mb-8 bg-gray-700" />

                        {/* Metadata Row */}
                        <div className="flex flex-wrap items-center gap-6">
                            <Skeleton className="h-4 w-32 bg-gray-700" />
                            <Skeleton className="h-4 w-40 bg-gray-700" />
                            <Skeleton className="h-4 w-28 bg-gray-700" />
                            <Skeleton className="h-4 w-36 bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column */}
                    <main className="lg:col-span-2 space-y-10">

                        {/* What you'll learn */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <Skeleton className="h-7 w-48 mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[...Array(6)].map((_, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Skeleton className="w-5 h-5 rounded-full flex-shrink-0" />
                                        <Skeleton className="h-4 flex-1" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <Skeleton className="h-7 w-40" />
                                <Skeleton className="h-4 w-32" />
                            </div>
                            <div className="space-y-3">
                                {[...Array(5)].map((_, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl border bg-gray-50">
                                        <div className="flex items-center gap-4 flex-1">
                                            <Skeleton className="w-8 h-8 rounded-full" />
                                            <div className="flex-1">
                                                <Skeleton className="h-4 w-3/4 mb-2" />
                                                <Skeleton className="h-3 w-20" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                            <Skeleton className="h-7 w-36 mb-6" />
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                        </div>
                    </main>

                    {/* Right Column - Sticky Sidebar */}
                    <aside className="relative">
                        <div className="sticky top-24 space-y-6">
                            {/* Preview Card */}
                            <Card className="overflow-hidden border-0 shadow-xl rounded-2xl ring-1 ring-gray-200">
                                {/* Video Skeleton */}
                                <div className="relative aspect-video bg-gray-200">
                                    <Skeleton className="w-full h-full" />
                                </div>

                                <CardContent className="p-6">
                                    {/* Pricing */}
                                    <div className="mb-6">
                                        <div className="flex items-end gap-3 mb-2">
                                            <Skeleton className="h-10 w-32" />
                                            <Skeleton className="h-6 w-24 mb-1" />
                                        </div>
                                        <Skeleton className="h-5 w-40" />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <Skeleton className="h-12 w-full rounded-xl" />
                                        <Skeleton className="h-12 w-full rounded-xl" />
                                        <Skeleton className="h-4 w-48 mx-auto mt-4" />
                                    </div>

                                    {/* Course Includes */}
                                    <div className="mt-8 pt-6 border-t border-gray-100">
                                        <Skeleton className="h-5 w-36 mb-4" />
                                        <div className="space-y-2">
                                            {[...Array(4)].map((_, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <Skeleton className="w-4 h-4" />
                                                    <Skeleton className="h-4 flex-1" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sidebar Footer */}
                            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                                <Skeleton className="h-4 w-48 mx-auto mb-2" />
                                <Skeleton className="h-3 w-56 mx-auto mb-3" />
                                <Skeleton className="h-9 w-full" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default CourseDetailsSkeleton;
