<script lang="ts">
    import "../app.css"
</script>

<div class="w-screen h-screen bg-slate-900 overflow-hidden p-8">
    <div class="mx-auto max-w-screen-sm h-full overflow-hidden relative">
        <div class="w-full h-full text-gray-300 bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
            <slot />
        </div>
    </div>
</div>
