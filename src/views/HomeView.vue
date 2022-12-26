<template>
  <div id="background">
    <div align="center">
      <nav>
        <NavBar />
      </nav>
    </div>

    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" lg="4" class="col-ecopontos">
          <div class="title" align="center">
            <h1>Ecopontos</h1>
          </div>

          <br>
          <div>
            <div class="ecopontos">
            </div>
            <br>
            <div class="ecopontos">
            </div>
          </div>

        </v-col>
        <v-col cols="12" lg="8" class="col-mapa" align="center">
          <div>
            <GMapMap :center="getPos()" :zoom="18" map-type-id="hybrid" style="width: 100%; height: 550px; border: 10px solid #FDFCF8; border-radius: 10px;">
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
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      markers: [
        {
          position: {
            lat: 41.36611,
            lng: -8.739542,
          },
        },
      ],
    };
  },
  methods: {
    getPos() {
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
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(180deg, #1a9360 0%, #00ad79 47.71%, #40ddae 100%);
  min-height: 1080px;
}

.col-mapa {
  max-width: 100%;
  max-height: 550px;
  overflow: hidden
}

.ecopontos {
  background-color: #114b5f;
  border-radius: 10px;
  width: 90%;
  height: 84px;
}

@media (max-width: 700px) {
  .col-ecopontos,
  .col-mapa {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  nav {
    width: 97%;
  }
}

@media (max-width: 768px) {
  nav {
    width: 97%;
  }
}

@media (min-width: 992px) {
  nav {
    width: 97%;
  }
}

@media (max-width: 1200px) {
  nav {
    width: 97%;
  }
}

@media (min-width: 1400px) {
  nav {
    width: 88%;
  }
}
</style>
