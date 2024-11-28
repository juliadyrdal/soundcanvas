<template>
    <!-- Global nav -->
    <nav class="navbar">

      <!-- Logo -->
      <div class="logo"><span>SoundCanvas</span></div>
      <!-- End Logo -->

      <!-- Toggle view button -->
      <UiButtonSwitchView />
      <!-- End Toggle view button -->

    </nav>
    <!-- End Global nav -->
</template>

<style lang="css" scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
}

.logo {
    font-size: 2.2rem;
}

/* Responsive styles */
@media (min-width: 768px) {
  .navbar {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1024px) {
  .navbar {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (min-width: 1440px) {
  .navbar {
    padding-left: 120px;
    padding-right: 120px;
  }
}
</style>