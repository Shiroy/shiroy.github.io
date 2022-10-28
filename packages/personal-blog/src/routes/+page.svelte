<script lang="ts">
	import Article from '$lib/Article.svelte';
	import Title from '$lib/Title.svelte';
	import Paragraph from '$lib/Paragraph.svelte';
	import Subtitle from '$lib/Subtitle.svelte';
</script>

<Article>
	<Title slot="title">This is a very very very long title</Title>

	<Paragraph>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus lacus ut eros consectetur
		porttitor. Etiam pharetra tortor at malesuada gravida. Etiam eget arcu rutrum, bibendum ipsum
		eu, pulvinar tellus. Curabitur semper sem eget lacinia faucibus. Phasellus mattis tempus nulla,
		nec euismod nulla ultricies nec. Ut efficitur enim vel venenatis ultrices. Nam sit amet est sed
		turpis accumsan sodales nec eu ante. Nunc accumsan sodales enim, et mollis massa placerat vel.
		Integer rhoncus, velit eget malesuada tristique, metus mi elementum mi, ac vehicula nibh leo nec
		nisl. Nam a magna vel ligula elementum hendrerit vel sed nisl. Sed vestibulum metus in lectus
		sagittis sollicitudin. Fusce molestie ligula id ultricies egestas. Nulla facilisis urna ac
		tortor tempor, eget tincidunt mi tempor.
	</Paragraph>
	<Paragraph>
		Praesent sed lacus odio. Integer maximus eros sed euismod imperdiet. Aliquam quam purus, semper
		et purus a, laoreet viverra libero. Etiam dapibus consequat convallis. Phasellus imperdiet nunc
		eu dolor blandit volutpat. Sed volutpat tristique odio id pulvinar. Aliquam at varius quam.
	</Paragraph>

	<Subtitle level="h2">A very very long title !!</Subtitle>
	<Subtitle level="h3">A very very long title !!</Subtitle>
	<Subtitle level="h4">A very very long title !!</Subtitle>
	<Subtitle level="h5">A very very long title !!</Subtitle>
	<Subtitle level="h6">A very very long title !!</Subtitle>

	<Paragraph>
		Fusce tortor lacus, suscipit ut elit id, placerat maximus libero. Vivamus ut libero vitae justo
		efficitur aliquet. Integer sed leo a ex vulputate lacinia id vel nisi. Proin arcu tellus,
		interdum in rutrum sit amet, tristique ut tortor. Suspendisse potenti. Sed pellentesque commodo
		erat. Proin id tempor mi, non pellentesque augue. Sed congue, purus sed interdum interdum, arcu
		ligula pretium purus, vel luctus felis elit a metus. Nullam nibh nibh, porttitor quis pharetra
		et, semper vitae magna. Duis et pulvinar dui. Aenean vel lectus vehicula augue placerat pretium
		eu quis erat. Donec sollicitudin nulla et ornare cursus. Vestibulum et efficitur mauris, sit
		amet lacinia ligula. In malesuada rhoncus pretium. Maecenas quis nisl nec ex efficitur volutpat
		ac feugiat augue.
	</Paragraph>
	<Paragraph>
		Phasellus eget ligula purus. Sed posuere sapien ut magna dignissim pellentesque. Integer dictum
		sapien eu tristique aliquet. Nullam tristique urna in erat elementum, sed malesuada nibh varius.
		Cras gravida porta neque eget convallis. Nulla consequat, lorem sed maximus blandit, orci velit
		tincidunt nisl, a facilisis tortor magna sit amet justo. Nulla sed placerat eros, ut laoreet
		turpis. Aliquam tempus ipsum non nulla molestie lobortis. Praesent volutpat auctor tellus non
		sagittis. Maecenas vel consectetur turpis. Morbi ultrices tincidunt euismod. Nullam eu nisi
		tortor. Aenean semper lacus elementum, aliquet magna a, auctor odio.
	</Paragraph>
	<Subtitle level="h3">A very very long title !!</Subtitle>
	<Paragraph>
		Cras fringilla, justo quis laoreet finibus, ante nisi porta ex, et volutpat nisi odio a metus.
		Praesent vitae pharetra odio. Vestibulum nec ante imperdiet, iaculis nunc posuere, lacinia mi.
		Aliquam arcu metus, ullamcorper tincidunt leo et, molestie mattis mauris. Etiam elementum sed
		ante vitae accumsan. Pellentesque blandit leo at lobortis finibus. Morbi finibus faucibus nisi,
		laoreet viverra sem luctus quis. Cras sagittis, felis ac porta tempus, quam dui lacinia urna,
		pretium mollis nibh lacus non nulla. Nulla quis commodo mi, vel aliquam nunc.
	</Paragraph>
	<Subtitle level="h4">A very very long title !!</Subtitle>
	<Paragraph>
		Duis condimentum lorem nec lorem congue, vitae venenatis arcu mollis. Sed sit amet ligula metus.
		Donec nec nisl vel quam scelerisque egestas faucibus ut massa. Curabitur efficitur ultrices
		magna, non consectetur diam aliquam at. Nam at libero tristique, feugiat felis sagittis, finibus
		odio. Donec vel aliquam mauris, in laoreet risus. Nullam convallis odio id purus ullamcorper
		rhoncus. Cras leo dui, egestas posuere purus nec, posuere eleifend lacus.
	</Paragraph>
	<Paragraph>
		Aliquam vehicula ipsum at tincidunt suscipit. Fusce quis mi quis urna faucibus vulputate. Lorem
		ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus dui ut enim bibendum
		sollicitudin. Proin a eleifend magna. Pellentesque et nisl quis purus placerat hendrerit.
		Aliquam erat volutpat. Nulla commodo ante eu velit elementum, nec facilisis neque pharetra.
		Morbi ullamcorper rutrum nisl, id scelerisque enim lacinia sit amet. Mauris mattis, magna quis
		placerat fermentum, purus velit volutpat quam, a tincidunt nulla massa at orci. Vestibulum
		eleifend gravida dui vel efficitur. Integer bibendum faucibus posuere. Orci varius natoque
		penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu leo quis dolor accumsan
		viverra quis eleifend ipsum. Donec orci orci, placerat quis magna quis, fringilla pulvinar leo.
		Vivamus commodo libero interdum tristique commodo.
	</Paragraph>
</Article>
