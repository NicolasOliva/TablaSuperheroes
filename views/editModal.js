
const editForm = `
    <div id="formulario" class="form" action="" name="formulario">
        <h2 class="form-titulo form-titulo1">Crea tu propio Heroe</h2>
        <div class="form-container">
            <input type="text" class="form-text"  name="id" id="id" style="display:none;">
            <div class="field">
                <input type="text" class="form-text"  name="nombre" placeholder="Nombre" id="nombre">
                <label for="nombre">Nombre</label>
            </div>

            <div class="field">
                <input type="text" class="form-text"  name="alias" placeholder="Alias" id="alias" >
                <label for="alias">Alias</label>
            </div>

            <div class="field">
                <input type="text" class="form-text"  name="universe" placeholder="Universo" id="universe">
                <label for="universe">Universo</label>
            </div>

            <div class="field">
                <input type="text" class="form-text"  name="nemesis" placeholder="Nemesis" id="enemigos">
                <label for="enemigos">Nemesis</label>
            </div>

            <div class="field">
                <input type="text" class="form-text"  name="foto" placeholder="Foto" id="foto">
                <label for="foto">Foto</label>
            </div>

            <div class="field">
                <input type="text" class="form-text"  name="romance" placeholder="Romance" id="romance">
                <label for="romance">Romance</label>
            </div>

            <div class="field bio-field">
                <input type="text" class="form-text" name="bio" placeholder="Biografia" id="bio" >
                <label for="bio">Biografia</label>
            </div>
            <input type="button" class="form-button" value="EDITAR" id="btn" onclick="editDataHero()">  
        </div>
    </div> `;
export default editForm;