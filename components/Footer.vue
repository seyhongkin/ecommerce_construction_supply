<template>
    <div id="FooterMain" class="w-full bg-[#E8E8E8] mt-10 mb-2">
        <div class="max-w-[1200px] mx-auto px-4">

            <div class="md:flex gap-4 justify-between w-full">
                <div class="md:w-[50%] pt-4">
                    <div class="text-lg font-semibold text-[#282828]">សំណួរពីយើង</div>
                    <div class="text-[#999999] text-sm">បញ្ហាទូទៅ របៀបប្រើប្រាស់</div>
                </div>
                <div class="md:w-[50%] pt-4">
                    <div class="text-lg font-semibold text-[#282828]">សេវាអតិថិជន</div>
                    <div class="text-[#999999] text-sm">ចម្ងល់ពីតម្លៃសេវា និងគុណភាព</div>
                </div>
            </div>

            <div class="md:flex gap-4 justify-between w-full">
                <div class="md:w-[50%] pt-4">
                    <div class="text-lg font-semibold text-[#282828]">ផលិតផល</div>
                    <div class="text-[#999999] text-sm">ប្រភពនាំចូល និងគុណភាព</div>
                </div>
                <div class="md:w-[50%] pt-4">
                    <div class="text-lg font-semibold text-[#282828]">អ្នកអភិវឌ្ឍគេហទំព័រ</div>
                    <div class="text-[#999999] text-sm">គេហទំព័រនេះត្រូវបានអភិវឌ្ឍដោយ Seyhong Dev</div>
                </div>
            </div>

        </div>
    </div>

    <div id="FooterSub" class="w-full bg-[#333333] text-sm text-gray-400">
        <div class="max-w-[1200px] mx-auto p-4">
            © {{ currentYear }} Tamab (Seyhong Dev). គេហទំព័រនេះគឺជាគំរូសម្រាប់ការសិក្សា និងមិនមានគោលបំណងពាណិជ្ជកម្មទេ
        </div>
    </div>
</template>

<script setup>
    const currentYear = new Date().getFullYear();
</script>
