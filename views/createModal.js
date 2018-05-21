const htmlTemplate = `
<div id="formulario" class="form" action="" name="formulario">
<h2 class="form-titulo form-titulo1">Crea tu propio Heroe</h2>
<div class="form-container">
        <div class="field">
            <input type="text" class="form-text input" maxlength="20"  name="nombre" placeholder="Nombre" id="nombre">
            <label for="nombre">Nombre</label>
        </div>

        <div class="field">
            <input type="text" class="form-text input"maxlength="20"   name="alias" placeholder="Alias" id="alias" >
            <label for="alias">Alias</label>
        </div>

        <div class="field">
            <input type="text" class="form-text input" maxlength="20"  name="universe" placeholder="Universo" id="universe">
            <label for="universe">Universo</label>
        </div>

        <div class="field">
            <input type="text" class="form-text input" maxlength="20"   name="nemesis" placeholder="Nemesis" id="enemigos">
            <label for="enemigos">Nemesis</label>
        </div>

        <div class="field">
            <input type="text" class="form-text input"   name="foto" placeholder="Foto" id="foto">
            <label for="foto">Foto</label>
        </div>

        <div class="field">
            <input type="text" class="form-text input" maxlength="30"  name="romance" placeholder="Romance" id="romance">
            <label for="romance">Romance</label>
        </div>

        <div class="field bio-field">
            <textarea class="form-text input" name="bio" placeholder="Biografia" id="bio" ></textarea>
            <label for="bio">Biografia</label>
        </div>

        <input type="button" class="form-button close" value="CREAR" id="btn" onclick="creation();">
        
    </div>
</div>                        
`;
export default htmlTemplate;