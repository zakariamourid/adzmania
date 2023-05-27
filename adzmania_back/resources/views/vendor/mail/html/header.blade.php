@props(['url'])
<tr>
    <td class="header">
        <a href="{{ $url }}" style="display: inline-block;">
            @if (trim($slot) === 'Laravel')
            <img src="https://i.imgur.com/dT9E5wt.png" class="logo" alt="adzmania Logo"
                style="width: 150px;height: auto; ">
            @else
            {{ $slot }}
            @endif
        </a>
    </td>
</tr>