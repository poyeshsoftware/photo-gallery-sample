<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-8 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
          </div>
          <div class="ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a href="#"
               class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home </a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>