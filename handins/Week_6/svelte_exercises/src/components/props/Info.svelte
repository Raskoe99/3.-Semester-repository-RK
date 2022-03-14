<script>
	export let name;
	export let version;
	export let speed;
	export let website;
</script>

<p>
	The <code>{name}</code> package is {speed} sloooooooow.
	Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm, or don't, I'm not your mom</a>
	and <a href={website}>learn more here if you can't read an instructions manual</a>
</p>