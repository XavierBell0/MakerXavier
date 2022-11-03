<template>
    <div>
        <span class="p-2">
            <span class="inline-block">
                <span class="code dot"></span> <span> Code </span>
                <span class="art dot"></span> <span> Art/Creative </span>
                <span class="team dot"></span> <span> Team </span>
                <span class="electronics dot"></span> <span> Electronics </span>
                <span class="CAD dot"></span> <span> CAD </span>
                <span class="research dot"></span> <span> Research </span>
                <span class="woodworking dot"></span> <span> Woodworking </span>

            </span>
        </span>
    </div>
</template>

<script>
    export default {
    };
</script>

<style scoped>
    .dot{
        margin-right: .25rem;
        margin-left: .5rem;
        display: inline-block;
        height: 1rem;
        width: 1rem;
        border-radius: 9999px;
        vertical-align: baseline;
    }
    .code {
    background-color: #264653;
    }
    .art {
    background-color: #457B9D;
    }
    .team {
    background-color: #2A9DAF;
    }
    .electronics {
    background-color: #E9C46A;
    }
    .CAD {
    background-color: #F4A261;
    }
    .research {
    background-color: #E76F51;
    }
    .woodworking {
    background-color: #AE2012;
    }
</style>