<template>
  <v-container>
    <v-row align-content="">
      <v-card 
        v-for="member in members"
        :key="member"
        class="mx-auto"
        max-width="400"
        outlined>
        <v-list-item three-line>
          <v-list-item-avatar
            title
            size="150"
            color="grey">
            <v-avatar size="140">
              <v-img 
              :src="member.src">
              </v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              {{member.name}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{member.role}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{member.age}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{member.institution}}
            </v-list-item-subtitle>
          </v-list-item-content>

        
        </v-list-item>

        <v-card-text>
            {{member.text}}
        </v-card-text>
        
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      members: {
        jose:{
          role: 'Role: Development',
          name: 'Jose Cabrera',
          age: 'Age: 31',
          src: require('@/assets/jose.jpg'),
          institution: 'Institution: UTP',
          text: 'Athetic - Mechanical engineer - Programmer ',
        },
        Orlando: {
          role: ' Role: Development',
          name: 'Orlando Barrios',
          age: 'Age: 30',
          src: require('@/assets/Library_backgorund.jpg'),
          institution: 'Institution: UTP',
          text: 'XXXX - XXXXX - Programmer ',
        }   
      }
      
    })
}
</script>