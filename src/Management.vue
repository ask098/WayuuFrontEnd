<template>
    
<!-- Modal management -->
<div id="management">
     <div  class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content modal-popup">
               <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title">administración de escuelas</h2>
               </div>

                    <form action="#" method="post">
                         <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required>
                         <input name="email" type="email" class="form-control" id="email" placeholder="Email Address" required>
                         <textarea name="message" rows="3" class="form-control" id="message" placeholder="Message" required></textarea>
                         <input name="submit" type="submit" class="form-control" id="submit" value="Send Message">
                    </form>
               </div>
          </div>
     </div>
</div>

</template>

<script>
export default {
     name: 'management',
     data () {
     return {
          name: 'Your Name',
          email: 'Email Address',
          message: 'Message',
          submit: 'Send Message'
          }
     }
}
</script>
