<template>
  <div id="background">
    <nav>
      <NavBar />
    </nav>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <h1>Ecopontos</h1>
          <v-container>
            <v-row no-gutters class="ecopontos">
              <v-col cols="12" md="6" align="center" >
                <div>
                  
                </div>
              </v-col>
            </v-row>
            <br>
            <v-row no-gutters class="ecopontos">
              <v-col cols="12" md="6" align="center">
                <div>
                  
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="12" sm="6">
          <h1>Teste</h1>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" md="6" align="center">
                <div>
                  <GMapMap :center="getPos()" :zoom="18" map-type-id="hybrid" style="width: 650px; height: 550px">
                    <GMapMarker :key="index" v-for="(m, index) in markers" />
                    <GMapCluster>
                      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
                        :draggable="true" @click="center = m.position" />
                    </GMapCluster>
                  </GMapMap>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
markers: [
  {
    position: {
      lat: 41.36611,
      lng: -8.739542,
    },
  },
];

function getPos() {
  if (
    navigator.geolocation.getCurrentPosition((position) => {
      return {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    })
  );
  else {
    return {
      lat: 41.36611,
      lng: -8.739542,
    };
  }
}
</script>

<style>
body {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

.ecopontos {
  background-color: #114b5f;
  border-radius: 10px;
  width: 397px;
  height: 84px;
}

@media (max-width: 576px) {
  nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 768px) {
  nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (min-width: 992px) {
  nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 1200px) {
  nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (min-width: 1400px) {
  nav {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
